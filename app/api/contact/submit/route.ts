import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { sendEmail, EMAIL_ACCOUNTS } from "@/lib/email-service";

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (!db) {
      return NextResponse.json(
        { error: "Database not initialized" },
        { status: 500 }
      );
    }

    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      serviceInterest: data.serviceInterest || "",
      message: data.message,
      source: "contact-page",
      status: "new",
      notes: "",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.serviceInterest ? `<p><strong>Service Interest:</strong> ${data.serviceInterest}</p>` : ""}
      <hr />
      <h3>Message</h3>
      <p>${data.message.replace(/\n/g, "<br />")}</p>
      <hr />
      <p style="color: #888; font-size: 12px;">
        Submission ID: ${docRef.id}<br />
        View in admin portal: /portal/admin/contact-submissions
      </p>
    `;

    try {
      await sendEmail("tda", {
        to: EMAIL_ACCOUNTS.tda.email,
        subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
        html: emailHtml,
        replyTo: data.email,
      });
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError);
    }

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    console.error("Error in contact submit API:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
