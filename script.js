// script.js
let scores = { left: 0, right: 0 };
let timerInterval;
let timerSeconds = 0;

function updateScore(side, points) {
  scores[side] += points;
  document.getElementById(`score-${side}`).textContent = scores[side];
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    timerSeconds++;
    document.getElementById('timer-display').textContent = formatTime(timerSeconds);
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  document.getElementById('timer-display').textContent = '00:00';
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
