import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFile(path.join(root, file), 'utf8');
const [page, css, js, artwork] = await Promise.all([
  read('index.html'), read('src/style.css'), read('src/app.js'), read('src/home-studio.svg'),
]);
const html = page
  .replace('<link rel="stylesheet" href="/src/style.css">', () => `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`)
  .replace('<script type="module" src="/src/app.js"></script>', '')
  .replace('src="/src/home-studio.svg"', () => `src="data:image/svg+xml;base64,${Buffer.from(artwork).toString('base64')}"`)
  .replaceAll('href="/"', 'href="#home"')
  .replace('<body>', '<body id="home">')
  .replace('</body>', () => `<script>${js.replace(/<\/script/gi, '<\\/script')}</script></body>`);
if (/(?:src|href)="\/(?:src\/)?/.test(html)) throw new Error('Unbundled local asset in Wix output');
await mkdir(path.join(root, 'wix'), { recursive: true });
await writeFile(path.join(root, 'wix/room-for-music.html'), html);
console.log('Created wix/room-for-music.html — paste its complete contents into a Wix Embed HTML element.');
