import { copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const src = '/Users/faizankhan/.gemini/antigravity/brain/c0ac4d0e-4701-4e99-bb78-651d4829b54f/dashboard_preview_1778139978041.png';
const dest = new URL('../public/dashboard-preview.png', import.meta.url).pathname;

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log('✅ Copied dashboard-preview.png to public/');
