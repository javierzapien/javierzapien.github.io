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
const bitmaps = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
const urls = import.meta.glob('/src/assets/**/*.{svg,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

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
