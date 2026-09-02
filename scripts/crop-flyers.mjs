import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "extracted");

// Crop regions expressed as fractions [x0, y0, x1, y1] of full image dimensions
const tdaFull = path.join(outDir, "tda-flyer-full.png");
const bloveFull = path.join(outDir, "blove-flyer-full.png");

const tdaCrops = [
  { name: "management-consulting.jpg", box: [0.01, 0.085, 0.495, 0.393] },
  { name: "program-development.jpg", box: [0.505, 0.085, 0.99, 0.393] },
  { name: "employee-observations.jpg", box: [0.005, 0.385, 0.335, 0.61] },
  { name: "training-coaching.jpg", box: [0.34, 0.385, 0.665, 0.61] },
  { name: "job-site-evaluations.jpg", box: [0.67, 0.385, 0.995, 0.61] },
];

const bloveCrops = [
  { name: "osha-outreach-1.jpg", box: [0.008, 0.085, 0.378, 0.31] },
  { name: "osha-outreach-2.jpg", box: [0.393, 0.085, 0.801, 0.31] },
  { name: "osha-outreach-3.jpg", box: [0.813, 0.085, 0.989, 0.31] },
  { name: "community-closet-1.jpg", box: [0.008, 0.387, 0.176, 0.612] },
  { name: "community-closet-2.jpg", box: [0.189, 0.387, 0.481, 0.612] },
  { name: "community-closet-3.jpg", box: [0.493, 0.387, 0.645, 0.612] },
  { name: "community-closet-4.jpg", box: [0.661, 0.387, 0.989, 0.612] },
];

async function cropAll(fullPath, crops) {
  const meta = await sharp(fullPath).metadata();
  const { width, height } = meta;
  for (const crop of crops) {
    const [x0, y0, x1, y1] = crop.box;
    const left = Math.round(x0 * width);
    const top = Math.round(y0 * height);
    const cropWidth = Math.round((x1 - x0) * width);
    const cropHeight = Math.round((y1 - y0) * height);
    const outPath = path.join(outDir, crop.name);
    await sharp(fullPath)
      .extract({ left, top, width: cropWidth, height: cropHeight })
      .jpeg({ quality: 88 })
      .toFile(outPath);
    console.log(`Cropped ${crop.name} (${cropWidth}x${cropHeight})`);
  }
}

await cropAll(tdaFull, tdaCrops);
await cropAll(bloveFull, bloveCrops);
