/**
 * Local image resolver.
 *
 * Project imagery lives in `src/assets/` and is committed to the repo. Astro
 * optimises the bitmaps at build time (responsive webp/avif). SVGs are served
 * as-is. See src/components/Img.astro for the render side.
 *
 * `id` is the path under src/assets without extension, e.g.
 * "projects/goldstorm/hero" or "logos/logo-01".
 */
const bitmaps = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
const svgs = import.meta.glob('/src/assets/**/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byId = new Map();
for (const [path, mod] of Object.entries(bitmaps)) {
  byId.set(path.replace('/src/assets/', '').replace(/\.[^.]+$/, ''), mod.default);
}
for (const [path, url] of Object.entries(svgs)) {
  byId.set(path.replace('/src/assets/', '').replace(/\.svg$/, ''), url);
}

export function asset(id) {
  if (!id) return null;
  return byId.get(id) ?? null;
}

/** Sorted gallery image ids for a project, relative to projects/ ("<slug>/01", …). */
export function galleryIds(slug) {
  const prefix = `projects/${slug}/`;
  return [...byId.keys()]
    .filter((k) => k.startsWith(prefix) && /\/\d+$/.test(k))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => k.slice('projects/'.length));
}
