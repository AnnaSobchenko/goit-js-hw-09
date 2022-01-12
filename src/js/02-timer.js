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
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
