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
