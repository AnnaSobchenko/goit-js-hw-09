import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const delay = Number(formEl.elements['delay'].value);
  const step = Number(formEl.elements['step'].value);
  const amount = Number(formEl.elements['amount'].value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + step * (i - 1))
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
