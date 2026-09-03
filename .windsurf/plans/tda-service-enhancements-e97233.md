# TDA Service Page Enhancements Plan

## Overview
Enhance the TDA Enterprises site by:
1. Creating detail pages for the 2 services that lack them (Hazard Assessment, Industry-Specific Solutions)
2. Adding "Learn more" href links for all 6 services missing them on the hub page
3. Standardizing all detail page CTAs to point to `/business/contact`
4. Building a robust Contact Us form that stores submissions in Firestore and emails the site owner
5. Adding an admin page to view contact submissions
6. Upgrading images on pages currently using extracted/flyer images to professional Pexels manufacturing/EHS photos

---

## Step 1: Create Hazard Assessment Detail Page
**File:** `app/(marketing)/business/services/hazard-assessment/page.tsx`

- Follow the existing pattern (ServiceHero + content sections + CTA)
- Pexels image: `https://images.pexels.com/photos/36301974/pexels-photo-36301974.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop` (industrial machinery with warning signs)
- Content sections: assessment types, process steps, benefits
- CTA: "Schedule a Hazard Assessment" → `/business/contact`

## Step 2: Create Industry-Specific Solutions Detail Page
**File:** `app/(marketing)/business/services/industry-specific-solutions/page.tsx`

- Follow the existing pattern
- Pexels image: `https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop` (worker in safety gear at manufacturing factory)
- Content sections: industries served (manufacturing, construction, warehousing, logistics, healthcare), tailored solutions
- CTA: "Discuss Your Industry Needs" → `/business/contact`

## Step 3: Add href Links on Hub Page
**File:** `app/(marketing)/business/services/page.tsx`

Add `href` to the 6 services currently missing them:
- OSHA Training & Certification → `/business/services/osha-training`
- Safety Audits & Compliance → `/business/services/safety-audits`
- Equipment Inspection → `/business/services/equipment-inspection`
- Turnkey Program Development → `/business/services/program-development`
- Hazard Assessment → `/business/services/hazard-assessment`
- Industry-Specific Solutions → `/business/services/industry-specific-solutions`

## Step 4: Standardize CTAs to /business/contact
Update detail pages that currently point to `/business/free-assessment`:
- `employee-observations/page.tsx`: Change "Request a Free Assessment" → "Contact Us" with `/business/contact`
- `program-development/page.tsx`: Change "Request a Free Assessment" → "Contact Us" with `/business/contact`
- `safety-audits/page.tsx`: Change "Request a Free Assessment" → "Contact Us" with `/business/contact`

## Step 5: Add ContactSubmissions Collection to Schema
**File:** `lib/schema.ts`

- Add `ContactSubmissionDoc` interface (name, email, phone, company, serviceInterest, message, status, createdAt, updatedAt)
- Add `CONTACT_SUBMISSIONS: "contactSubmissions"` to `COLLECTIONS`
- Add `contactSubmissionsCollection()` helper

## Step 6: Build Robust Contact Us Form
**File:** `app/(marketing)/business/contact/page.tsx` (convert to client component or split)

- Form fields: First Name, Last Name, Email, Phone, Company, Service Interest (dropdown), Message
- Use react-hook-form + Zod validation
- On submit: POST to `/api/contact/submit`
- Show success/error toast notifications
- Keep existing contact info cards (phone, email, address)

**File:** `app/api/contact/submit/route.ts` (new API route)

- Validate body with Zod
- Store submission in Firestore `contactSubmissions` collection
- Send email notification to `info@tdaenterprises.com` via existing email service
- Return success/error JSON

## Step 7: Create Admin Page for Contact Submissions
**File:** `app/(portal)/portal/admin/contact-submissions/page.tsx`

- Follow the pattern from `book-call-leads/page.tsx`
- Table with: name, email, phone, company, service interest, message, status, submitted date
- Status management: new → contacted → resolved
- Detail dialog with full submission info
- Notes field for internal tracking

## Step 8: Upgrade Images to Pexels Manufacturing/EHS Photos
Replace extracted/flyer images on existing detail pages with professional Pexels photos:

- `employee-observations/page.tsx`: → `https://images.pexels.com/photos/37090943/pexels-photo-37090943.jpeg` (industrial workers in safety gear)
- `equipment-inspection/page.tsx`: → `https://images.pexels.com/photos/9242919/pexels-photo-9242919.jpeg` (safety glasses on metal surface)
- `management-consulting/page.tsx`: → `https://images.pexels.com/photos/36423823/pexels-photo-36423823.jpeg` (industrial worker in factory)
- `program-development/page.tsx`: → `https://images.pexels.com/photos/3823542/pexels-photo-3823542.jpeg` (manufacturing facility) *(verify URL)*
- `training-coaching/page.tsx`: → `https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg` (hands-on training) *(verify URL)*

---

## Execution Order
1. Steps 1-2: Create new detail pages
2. Step 3: Update hub page with href links
3. Step 4: Standardize CTAs
4. Step 5: Add schema types
5. Step 6: Build contact form + API route
6. Step 7: Create admin page
7. Step 8: Upgrade images
