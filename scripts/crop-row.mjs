import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "extracted");
const bloveFull = path.join(outDir, "blove-flyer-full.png");
const tdaFull = path.join(outDir, "tda-flyer-full.png");

async function cropRow(fullPath, y0, y1, outName) {
  const meta = await sharp(fullPath).metadata();
  const { width, height } = meta;
  const top = Math.round(y0 * height);
  const cropHeight = Math.round((y1 - y0) * height);
  const outPath = path.join(outDir, outName);
  await sharp(fullPath)
    .extract({ left: 0, top, width, height: cropHeight })
    .png()
    .toFile(outPath);
  console.log(`Row ${outName}: ${width}x${cropHeight}`);
}

await cropRow(bloveFull, 0.37, 0.63, "row-closet-check.png");
await cropRow(tdaFull, 0.375, 0.63, "row-tda-mid-check.png");
