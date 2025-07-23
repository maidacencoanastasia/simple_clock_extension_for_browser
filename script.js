function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const showSeconds = document.getElementById("timeFormatToggle").checked;
  const clock = document.getElementById("clock");

  clock.textContent = showSeconds
    ? `${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}`;
  clock.classList.toggle("with-seconds", showSeconds);
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  setInterval(updateClock, 1000);

  const toggle = document.getElementById("timeFormatToggle");
  toggle.addEventListener("change", updateClock);
});
