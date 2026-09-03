/**
 * API Route to set up the platform Administrator account
 * POST /api/setup-admin
 *
 * Creates User document and links to Firebase Auth account
 */

import { NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

// Initialize Firebase Admin if not already initialized
if (!getApps().length) {
  try {
    initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } catch (error) {
    console.error("Firebase Admin initialization error:", error);
  }
}

const ADMIN_EMAIL = process.env.TDA_SMTP_USER || "tdaentrprz@gmail.com";

export async function POST() {
  try {
    const db = getFirestore();
    const auth = getAuth();
    const now = Timestamp.now();

    // 1. Find or get the Firebase Auth user by email
    let authUser;
    try {
      authUser = await auth.getUserByEmail(ADMIN_EMAIL);
      console.log("Found existing Auth user:", authUser.uid);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        // Create new Auth user if doesn't exist
        authUser = await auth.createUser({
          email: ADMIN_EMAIL,
          displayName: "Platform Administrator",
          emailVerified: true,
        });
        console.log("Created new Auth user:", authUser.uid);
      } else {
        throw error;
      }
    }

    const ADMIN_UID = authUser.uid;

    // 2. Create/update user document with Admin role
    const userRef = db.collection("users").doc(ADMIN_UID);
    await userRef.set({
      id: ADMIN_UID,
      email: ADMIN_EMAIL,
      firstName: "Platform",
      lastName: "Administrator",
      displayName: "Platform Administrator",
      role: "superadmin",
      status: "active",
      createdAt: now,
      updatedAt: now,
      lastActive: now,
    }, { merge: true });

    // 3. Find existing team member by email and link, or create new one
    const teamMembersRef = db.collection("teamMembers");
    const snapshot = await teamMembersRef.where("emailPrimary", "==", ADMIN_EMAIL).get();

    let teamMemberId = null;

    if (!snapshot.empty) {
      // Update existing team member
      const teamMemberDoc = snapshot.docs[0];
      teamMemberId = teamMemberDoc.id;

      await teamMemberDoc.ref.update({
        authUid: ADMIN_UID,
        role: "superadmin",
        updatedAt: now,
      });
      console.log("Updated existing team member:", teamMemberId);
    } else {
      // Create new team member
      const newTeamMemberRef = await teamMembersRef.add({
        authUid: ADMIN_UID,
        emailPrimary: ADMIN_EMAIL,
        firstName: "Platform",
        lastName: "Administrator",
        role: "superadmin",
        status: "active",
        createdAt: now,
        updatedAt: now,
      });
      teamMemberId = newTeamMemberRef.id;
      console.log("Created new team member:", teamMemberId);
    }

    return NextResponse.json({
      success: true,
      message: "Platform Administrator setup complete",
      data: {
        email: ADMIN_EMAIL,
        uid: ADMIN_UID,
        teamMemberId,
        role: "superadmin",
      },
    });

  } catch (error) {
    console.error("Error setting up Platform Administrator:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST to set up the Platform Administrator",
    endpoint: "/api/setup-admin",
  });
}
