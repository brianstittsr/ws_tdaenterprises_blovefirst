/**
 * Seed EHS images from the local content drive into the Firebase Image Library.
 *
 * Usage:
 *   1. Set FIREBASE_SERVICE_ACCOUNT_KEY and NEXT_PUBLIC_FIREBASE_PROJECT_ID in .env.local
 *   2. npx ts-node scripts/seed-ehs-images.ts
 *
 * The script walks C:\Users\Buyer\Documents\CascadeProjects\TreymaneAnderson\EHS-content-usb drive,
 * converts each image to WebP, resizes it so the final base64 payload stays under the 1MB
 * Firestore document limit, and writes it to the `images` collection.
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { promises as fs } from "fs";
import path from "path";

let sharp: typeof import("sharp") | undefined;
try {
  sharp = require("sharp");
} catch {
  console.error("This script requires 'sharp'. Install with: npm install -D sharp");
  process.exit(1);
}

const CONTENT_DRIVE = "C:\\Users\\Buyer\\Documents\\CascadeProjects\\TreymaneAnderson\\EHS-content-usb drive";
const IMAGES_COLLECTION = "images";
const MAX_DOC_BYTES = 1_000_000; // Leave headroom below 1 MiB Firestore doc limit

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

if (!serviceAccount || !projectId) {
  console.error("Missing FIREBASE_SERVICE_ACCOUNT_KEY or NEXT_PUBLIC_FIREBASE_PROJECT_ID env vars");
  process.exit(1);
}

const app = initializeApp({
  credential: cert(JSON.parse(serviceAccount)),
  projectId,
});

const db = getFirestore(app);

interface ImageRecord {
  id: string;
  name: string;
  description: string;
  category: "hero" | "about" | "team" | "services" | "training" | "audits" | "marketing" | "other";
  mimeType: "image/webp";
  base64Data: string;
  width: number;
  height: number;
  size: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  tags: string[];
  isActive: boolean;
}

function toBase64Key(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function folderToCategory(folder: string): ImageRecord["category"] {
  const map: Record<string, ImageRecord["category"]> = {
    training: "training",
    audits: "audits",
    inspections: "audits",
    construction: "services",
    chemicals: "services",
    "confined space": "services",
    "defective equipment": "services",
    electrical: "services",
    "exit-ofc": "services",
    "fall hazards": "services",
    "fire ext-haz-stor": "services",
    "general safety": "services",
    guarding: "services",
    "hoists-carts": "services",
    "holes-openings": "services",
    hoses: "services",
    housekeeping: "services",
    loto: "services",
    ladders: "services",
    "mobile equipment": "services",
    scaffolding: "services",
    recognition: "marketing",
    injury: "services",
  };
  return map[folder.toLowerCase()] ?? "other";
}

async function* walkImages(dir: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkImages(fullPath);
    } else if (/\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(entry.name)) {
      // Skip macOS resource forks and hidden thumbs
      if (entry.name.startsWith("._")) continue;
      yield fullPath;
    }
  }
}

async function processImage(filePath: string): Promise<Partial<ImageRecord> | null> {
  const folder = path.basename(path.dirname(filePath));
  const baseName = path.basename(filePath, path.extname(filePath));
  const keyName = `tda-${folderToCategory(folder)}-${toBase64Key(baseName)}`;

  let buffer = await sharp!(filePath)
    .rotate()
    .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toBuffer();

  // If the WebP is still too large for base64 storage, scale down further.
  let dimensions = await sharp!(buffer).metadata();
  let attempts = 0;
  while (buffer.length * 1.37 > MAX_DOC_BYTES && attempts < 6) {
    const newWidth = Math.round((dimensions.width ?? 1920) * 0.75);
    buffer = await sharp!(buffer)
      .resize({ width: newWidth, fit: "inside" })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    dimensions = await sharp!(buffer).metadata();
    attempts++;
  }

  if (buffer.length * 1.37 > MAX_DOC_BYTES) {
    console.warn(`Skipping ${filePath}: cannot compress under 1MB doc limit`);
    return null;
  }

  return {
    name: keyName,
    description: `${baseName.replace(/_/g, " ")} — ${folder}`,
    category: folderToCategory(folder),
    mimeType: "image/webp",
    base64Data: buffer.toString("base64"),
    width: dimensions.width ?? 0,
    height: dimensions.height ?? 0,
    size: buffer.length,
    tags: ["tda", "ehs", folderToCategory(folder)],
    isActive: true,
  };
}

async function seedImages() {
  const existingSnap = await db.collection(IMAGES_COLLECTION).where("tags", "array-contains", "tda").get();
  const existingNames = new Set(existingSnap.docs.map((d) => (d.data() as ImageRecord).name));

  let uploaded = 0;
  let skipped = 0;

  for await (const filePath of walkImages(CONTENT_DRIVE)) {
    try {
      const record = await processImage(filePath);
      if (!record) {
        skipped++;
        continue;
      }

      if (existingNames.has(record.name!)) {
        console.log(`Skipping duplicate: ${record.name}`);
        skipped++;
        continue;
      }

      const now = Timestamp.now();
      const docRef = db.collection(IMAGES_COLLECTION).doc();
      const fullRecord: ImageRecord = {
        id: docRef.id,
        ...record,
        createdAt: now,
        updatedAt: now,
      } as ImageRecord;

      await docRef.set(fullRecord);
      console.log(`Uploaded: ${fullRecord.name} (${fullRecord.size} bytes)`);
      uploaded++;
    } catch (error) {
      console.error(`Failed processing ${filePath}:`, error);
      skipped++;
    }
  }

  console.log(`\nDone. Uploaded: ${uploaded}, Skipped: ${skipped}`);
}

seedImages()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  });
