let timer = null;
let seconds = 0;
let isRunning = false;
let lapCounter = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

function updateDisplay() {

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.innerText =
    ${String(hrs).padStart(2, '0')}: +
    ${String(mins).padStart(2, '0')}: +
    ${String(secs).padStart(2, '0')};
}

function startStopwatch() {

  if (!isRunning) {

    isRunning = true;

    timer = setInterval(() => {

      seconds++;
      updateDisplay();

    }, 1000);
  }
}

function pauseStopwatch() {

  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {

  clearInterval(timer);

  isRunning = false;
  seconds = 0;
  lapCounter = 1;

  updateDisplay();
  laps.innerHTML = "";
}

function recordLap() {

  if (seconds === 0) return;

  const lapItem = document.createElement("li");

  lapItem.innerHTML = `
    <span>Lap ${lapCounter}</span>
    <span>${display.innerText}</span>
  `;

  laps.prepend(lapItem);

  lapCounter++;
}

startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);