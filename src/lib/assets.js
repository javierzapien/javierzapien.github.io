/**
 * Local image resolver.
 *
 * Project media lives in `src/assets/` and is committed to the repo. Astro
 * optimises the bitmaps at build time (responsive webp/avif); SVGs and videos
 * are served as-is. See src/components/Img.astro for the render side.
 *
 * `id` is the path under src/assets without extension, e.g.
 * "projects/goldstorm/hero", "logos/logo-01", "projects/patio-sunline/02".
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const bitmaps = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
const urls = import.meta.glob('/src/assets/**/*.{svg,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const videoPaths = import.meta.glob('/src/assets/**/*.{mp4,webm}', { eager: false });

const stripExt = (p) => p.replace('/src/assets/', '').replace(/\.[^.]+$/, '');

const byId = new Map();
const videoById = new Map();
for (const [path, mod] of Object.entries(bitmaps)) byId.set(stripExt(path), mod.default);
for (const [path, url] of Object.entries(urls)) {
  const id = stripExt(path);
  if (/\.(mp4|webm)$/.test(path)) videoById.set(id, url);
  else byId.set(id, url);
}

export function asset(id) {
  if (!id) return null;
  return byId.get(id) ?? null;
}

/**
 * Pixel size of an .mp4 as {width, height}, read from its `tkhd` box at build
 * time, or null (webm / unreadable). Lets the gallery tell landscape clips from
 * portrait ones, the way it already does for bitmaps.
 */
export function videoSize(id) {
  const path = Object.keys(videoPaths).find((p) => stripExt(p) === id);
  if (!path || !path.endsWith('.mp4')) return null;
  try {
    const buf = readFileSync(join(process.cwd(), path));
    const tkhd = buf.indexOf('tkhd');
    if (tkhd < 0) return null;
    // After the 4-byte tag: version/flags, then 24 (v0) or 36 (v1) bytes of
    // times/ids/duration, 52 bytes of layer/matrix etc., then width and height
    // as 16.16 fixed-point.
    const v1 = buf[tkhd + 4] === 1;
    const at = tkhd + 4 + 4 + (v1 ? 32 : 20) + 52;
    return { width: buf.readUInt32BE(at) / 65536, height: buf.readUInt32BE(at + 4) / 65536 };
  } catch {
    return null;
  }
}

/** Video URL for an id, or null. */
export function video(id) {
  if (!id) return null;
  return videoById.get(id) ?? null;
}

/** Sorted gallery ids for a project, relative to projects/ ("<slug>/01", …). */
export function galleryIds(slug) {
  const prefix = `projects/${slug}/`;
  const ids = new Set();
  for (const k of byId.keys()) if (k.startsWith(prefix) && /\/\d+$/.test(k)) ids.add(k);
  for (const k of videoById.keys()) if (k.startsWith(prefix) && /\/\d+$/.test(k)) ids.add(k);
  return [...ids]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => k.slice('projects/'.length));
}
