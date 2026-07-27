// Dubai real-time clock
function updateDubaiTime() {
  const now = new Date();
  const opts = { timeZone: 'Asia/Dubai', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', opts);
  const timeStr = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour12: false });
  document.querySelectorAll('.dubai-date').forEach(el => el.textContent = dateStr);
  document.querySelectorAll('.dubai-time').forEach(el => el.textContent = timeStr);
}
setInterval(updateDubaiTime, 1000);
updateDubaiTime();

// Continuous flower rotation across page navigations.
// Stores the session start time so the animation-delay compensates
// for however long has elapsed — the flower appears to spin without pause.
(function () {
  const PERIOD_MS = 12000; // must match the CSS animation duration (12s)
  const KEY = 'flowerSessionStart';

  let start = parseInt(sessionStorage.getItem(KEY), 10);
  if (!start || isNaN(start)) {
    start = Date.now();
    sessionStorage.setItem(KEY, start);
  }

  const elapsed = (Date.now() - start) % PERIOD_MS;

  document.querySelectorAll('.flower').forEach(function (el) {
    el.style.animationDelay = '-' + elapsed + 'ms';
  });
}());

// Reset all project galleries to the first image on every page load
document.querySelectorAll('.project-gallery').forEach(function (gallery) {
  gallery.scrollLeft = 0;
});
