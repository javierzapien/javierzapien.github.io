/**
 * Image URL helper.
 *
 * The portfolio photography lives on Cloudinary (account "jd15bq4d"), NOT in
 * this repo and NOT on Vercel. Vercel hosts the site; Cloudinary hosts and
 * optimises the images (auto format + auto quality + on-the-fly resizing).
 *
 * projects.js stores each image as a Cloudinary *public id* — e.g.
 * "portfolio/amargo-mezcal/thumb". This helper turns that into a full URL with
 * the right transformations for the slot it is used in.
 *
 * While the real assets are still being uploaded, set CLOUDINARY_READY = false
 * and every image resolves to a deterministic placeholder so the site builds
 * and previews. Flip it to true once the Cloudinary folders are populated.
 */

export const CLOUD_NAME = 'jd15bq4d';
export const CLOUDINARY_READY = false;

const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/** Deterministic inline-SVG placeholder (no network) until Cloudinary is wired. */
function placeholder(publicId, w, h) {
  const label = (publicId || 'image').split('/').slice(-2).join('/');
  let hash = 0;
  for (let i = 0; i < (publicId || '').length; i++) hash = (hash * 31 + publicId.charCodeAt(i)) | 0;
  const hue = Math.abs(hash) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="100%" height="100%" fill="hsl(${hue} 12% 86%)"/>
<text x="50%" y="50%" fill="hsl(${hue} 15% 40%)" font-family="monospace" font-size="${Math.round(w / 24)}" text-anchor="middle" dominant-baseline="middle">${label}</text>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Transformation presets per image slot. f_auto + q_auto everywhere.
const PRESETS = {
  thumb: 'f_auto,q_auto,c_fill,g_auto,w_900,ar_4:3',
  hero: 'f_auto,q_auto,c_fill,g_auto,w_1800,ar_16:10',
  heroMobile: 'f_auto,q_auto,c_fill,g_auto,w_800,ar_4:5',
  gallery: 'f_auto,q_auto,w_1600',
  og: 'f_jpg,q_auto,c_fill,w_1200,h_630',
};

/**
 * @param {string} publicId  Cloudinary public id stored in projects.js
 * @param {keyof typeof PRESETS} slot
 */
export function img(publicId, slot = 'thumb') {
  if (!CLOUDINARY_READY || !publicId) {
    const [w, h] =
      slot === 'hero' ? [1800, 1125]
      : slot === 'heroMobile' ? [800, 1000]
      : slot === 'gallery' ? [1600, 1100]
      : slot === 'og' ? [1200, 630]
      : [900, 675];
    return placeholder(publicId, w, h);
  }
  const t = PRESETS[slot] ?? PRESETS.thumb;
  return `${BASE}/${t}/${publicId}`;
}

/** Build a srcset string for a slot at a few widths. */
export function srcset(publicId, widths = [480, 768, 1200, 1800]) {
  if (!CLOUDINARY_READY || !publicId) return undefined;
  return widths
    .map((w) => `${BASE}/f_auto,q_auto,c_fill,g_auto,w_${w}/${publicId} ${w}w`)
    .join(', ');
}
