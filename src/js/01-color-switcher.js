const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const backgroundColorEl = document.querySelector('body');

stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBackgroundColor() {
  colorBackChange = setInterval(() => {
    backgroundColorEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  console.log(startBtn);
  console.log(stopBtn);
}

startBtn.addEventListener('click', setBackgroundColor);

stopBtn.addEventListener('click', () => {
  clearInterval(colorBackChange);
  //   startBtn.removeEventListener('click', setBackgroundColor);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  console.log(`Change backgroundcolor has stopped!`);
  console.log(startBtn);
  console.log(stopBtn);
});
