/**
 * Local image resolver.
 *
 * Project imagery lives in `src/assets/projects/<slug>/` and is committed to the
 * repo. Astro optimises it at build time (responsive webp/avif) — no external
 * image host. See src/components/Img.astro for the render side.
 *
 * `id` is the path under src/assets without extension, e.g.
 * "projects/goldstorm/hero". Returns Astro's ImageMetadata, or null if the file
 * isn't in the repo yet (Img.astro then shows a placeholder).
 */
const files = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

const byId = new Map();
for (const [path, mod] of Object.entries(files)) {
  const id = path.replace('/src/assets/', '').replace(/\.[^.]+$/, '');
  byId.set(id, mod.default);
}

export function asset(id) {
  if (!id) return null;
  return byId.get(id) ?? null;
}

export function hasAsset(id) {
  return byId.has(id);
}
