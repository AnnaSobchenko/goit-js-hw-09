// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.updateTimer();
//     this.interval = null;
//   }

//   updateTimer() {
//     this.interval = setInterval(() => {
//       const currentTime = Date.now();
//       const time = this.targetDate - currentTime;
//       const daysEl = document.querySelector(`${this.selector} [data-value="days"]`);
//       const hoursEl = document.querySelector(`${this.selector} [data-value="hours"]`);
//       const minsEl = document.querySelector(`${this.selector} [data-value="mins"]`);
//       const secsEl = document.querySelector(`${this.selector} [data-value="secs"]`);

//       daysEl.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
//       hoursEl.textContent = String(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       ).padStart(2, '0');
//       minsEl.textContent = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(
//         2,
//         '0',
//       );
//       secsEl.textContent = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
//     }, 1000);
//   }
// }

// const timer1 = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2022'),
// });

// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Jul 17, 2023'),
// });

// Описан в документации
import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

let dateFuture;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
console.log(daysEl);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const today = new Date();
    dateFuture = selectedDates[0];
    if (dateFuture > today) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      Notify.warning('Please choose a date in the future');
    }
  },
};

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
console.log(startBtn);
flatpickr('#datetime-picker', options);
// const dateFuture =

// console.log(dateFuture.onClose);
startBtn.addEventListener('click', onClick);

function onClick() {
  console.log(dateFuture);
  updateTimer();
  startBtn.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer() {
  const interval = setInterval(() => {
    const ms = dateFuture - Date.now();
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
}
