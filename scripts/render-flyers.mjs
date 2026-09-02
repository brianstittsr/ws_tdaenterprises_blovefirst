import { createCanvas } from "@napi-rs/canvas";
import { readFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// pdfjs-dist legacy build works in Node without DOM APIs
const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const flyersDir = path.join(__dirname, "..", "public", "images", "flyers");
const outDir = path.join(__dirname, "..", "public", "images", "extracted");
mkdirSync(outDir, { recursive: true });

const files = [
  { input: "TDA Enterprise EHS Consulting Flyer.pdf", output: "tda-flyer-full.png" },
  { input: "B Love Foundation Outreach Training Flyer.pdf", output: "blove-flyer-full.png" },
];

const SCALE = 3; // render at 3x for high resolution

for (const file of files) {
  const filePath = path.join(flyersDir, file.input);
  const data = new Uint8Array(readFileSync(filePath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  const page = await doc.getPage(1);
  const viewport = page.getViewport({ scale: SCALE });

  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext("2d");

  await page.render({ canvasContext: context, viewport }).promise;

  const outPath = path.join(outDir, file.output);
  const buffer = canvas.toBuffer("image/png");
  const { writeFileSync } = await import("node:fs");
  writeFileSync(outPath, buffer);
  console.log(`Rendered ${file.input} -> ${outPath} (${viewport.width}x${viewport.height})`);
}
