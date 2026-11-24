import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../public/images/sp-mark.svg', import.meta.url));
for (const [name, size] of [['icon.png', 512], ['apple-icon.png', 180]] as const) {
  await sharp(source).resize(size, size).png().toFile(fileURLToPath(new URL(`../app/${name}`, import.meta.url)));
}
const png = await sharp(source).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 32;
header[7] = 32;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
await writeFile(new URL('../app/favicon.ico', import.meta.url), Buffer.concat([header, png]));
console.log('Generated SP app icon, Apple icon, and favicon.');
