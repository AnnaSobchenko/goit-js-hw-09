import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

console.log(formEl.amount);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() =>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
   res({})
  } else {
    // Reject
  }
  })
  
  
}

// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;
//     if (canProcess) {
//       resolve({ id: transaction.id, time: delay });
//     }
//     reject(transaction.id);
//   }, delay);
// });