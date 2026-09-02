import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "extracted");
const bloveFull = path.join(outDir, "blove-flyer-full.png");

const meta = await sharp(bloveFull).metadata();
const { width, height } = meta;
const top = Math.round(0.08 * height);
const cropHeight = Math.round((0.31 - 0.08) * height);
await sharp(bloveFull)
  .extract({ left: 0, top, width, height: cropHeight })
  .png()
  .toFile(path.join(outDir, "row-osha-check.png"));
console.log(`Row width=${width} height=${cropHeight}`);
