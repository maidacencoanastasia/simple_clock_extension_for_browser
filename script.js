function updateTime() {
  const now = new Date();
  const clock = document.getElementById('clock');
  const showSeconds = document.getElementById('timeFormatToggle').checked;
  
  if (showSeconds) {
    clock.textContent = now.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  } else {
    clock.textContent = now.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
}

document.getElementById('timeFormatToggle').addEventListener('change', updateTime);
setInterval(updateTime, 1000);
updateTime();