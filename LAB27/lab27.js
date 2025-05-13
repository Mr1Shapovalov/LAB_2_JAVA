// Варіант №17 ,завдання:
// Оптимізувати обробку скролу в довгій сторінці через тротлінгту.

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
const scrollStatus = document.getElementById('scroll-status');
window.addEventListener('scroll', throttle(() => {
  scrollStatus.textContent = `Прокручено до: ${window.scrollY.toFixed(0)} пікселів`;
}, 200));


// Додаткове завдання на 5 балів: Варіант №19:
// Реалізувати зняття обробника події після 3 кліків.

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('click-btn');
  if (!button) return;
  let clickCount = 0;
  function handleClick() {
    clickCount++;
    button.textContent = `Клікнуто: ${clickCount} раз(и)`;
    if (clickCount >= 3) {
      button.removeEventListener('click', handleClick);
      button.textContent += ' — Обробник знято';
    }
  }
  button.addEventListener('click', handleClick);
});

