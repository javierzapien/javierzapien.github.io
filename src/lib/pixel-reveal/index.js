import Canvas from './canvas.js';

/**
 * Finds every [data-pixel-reveal] image, hides it, and draws it instead as a
 * WebGL plane that reveals with a randomised pixel-grid wipe as it scrolls
 * into view. Progressive enhancement: skips entirely with no visual change
 * (images stay put, fully visible) when the user prefers reduced motion or
 * the browser has no WebGL.
 */
export function initPixelReveal() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvasEl = document.getElementById('pixel-reveal-canvas');
  if (!canvasEl) return;

  const probe = document.createElement('canvas');
  const hasWebGL = !!(probe.getContext('webgl2') || probe.getContext('webgl'));
  if (!hasWebGL) return;

  // Wait for web fonts so layout (and therefore every image's bounding rect)
  // is final before measuring — otherwise a late font swap can leave a mesh
  // positioned where its image used to be for a frame or two.
  const ready = document.fonts?.ready
    ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 500))])
    : Promise.resolve();

  ready.then(() => boot(canvasEl));
}

function boot(canvasEl) {
  const canvas = new Canvas(canvasEl);
  let running = false;

  function start() {
    running = true;
    const tick = () => {
      canvas.render(window.scrollY);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function setup(img) {
    if (img.dataset.pixelRevealReady) return;
    img.dataset.pixelRevealReady = '1';
    canvas.addMedia(img).observe();
    img.style.opacity = '0';
    if (!running) start();
  }

  document.querySelectorAll('[data-pixel-reveal]').forEach((img) => {
    if (img.complete && img.naturalWidth > 0) setup(img);
    else img.addEventListener('load', () => setup(img), { once: true });
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => canvas.onResize(), 150);
  });
}
