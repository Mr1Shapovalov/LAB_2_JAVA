// Варіант №17 ,завдання:
// Створити таймер, що запускається при натисканні на кнопку
let seconds = 0;
let timerId = null;
document.getElementById('startBtn').addEventListener('click', () => {
  if (timerId === null) {
    timerId = setInterval(() => {
      seconds++;
      document.getElementById('timerText').textContent = `Час: ${seconds} секунд`;
    }, 1000);
  }
});

// Дадоткове завдання на 5 балів, варіант №19:
// Реалізувати зміну кольору фону для елемента при наведенні і відведенні миші.
const box = document.getElementById('colorBox');
box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'lightgreen';
});
box.addEventListener('mouseout', () => {
  box.style.backgroundColor = 'lightgray';
});
