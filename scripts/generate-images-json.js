// Generates public/api/images.json listing every available image ID per SWAPI category.
// Run with: npm run generate:images
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = join(root, 'public', 'assets');
const outDir = join(root, 'public', 'api');
const BASE_URL = 'https://starwarsgallery.netlify.app';
const CATEGORIES = ['people', 'planets', 'species', 'starships', 'vehicles'];

const categories = {};
let total = 0;

for (const category of CATEGORIES) {
  const ids = readdirSync(join(assetsDir, category))
    .filter((file) => /^\d+\.jpg$/.test(file))
    .map((file) => Number(file.replace('.jpg', '')))
    .sort((a, b) => a - b);

  total += ids.length;
  categories[category] = {
    count: ids.length,
    swapiEndpoint: `https://swapi.dev/api/${category}/{id}/`,
    imageUrlTemplate: `${BASE_URL}/assets/${category}/{id}.jpg`,
    ids,
  };
}

const output = {
  name: 'Star Wars Gallery — SWAPI Image API',
  description:
    'Free static image API for SWAPI (The Star Wars API). Each image uses the same ID as its SWAPI resource.',
  baseUrl: BASE_URL,
  usage: 'Replace {id} in imageUrlTemplate with the SWAPI resource ID. Missing IDs return HTTP 404.',
  cors: 'Access-Control-Allow-Origin: *',
  totalImages: total,
  categories,
};

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'images.json'), JSON.stringify(output, null, 2) + '\n');
console.log(`images.json generated with ${total} images.`);
