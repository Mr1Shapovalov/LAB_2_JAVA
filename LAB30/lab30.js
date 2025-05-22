// Варіант№17 ,завдання:
// Реалізувати зміну повідомлення в залежності від часу доби.

const messageDiv = document.getElementById('message');
const now = new Date();
const hour = now.getHours();
let message = '';
if (hour >= 6 && hour < 12) {
  message = 'Доброго ранку!';
} else if (hour >= 12 && hour < 18) {
  message = 'Доброго дня!';
} else if (hour >= 18 && hour < 22) {
  message = 'Доброго вечора!';
} else {
  message = 'Добра ніч!';
}
messageDiv.textContent = message;


// Додаткове завдання на 5 балів:
// Вивести всі п'ятниці поточного місяця.

const fridaysList = document.getElementById('fridays');
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); 
const daysInMonth = new Date(year, month + 1, 0).getDate();
for (let day = 1; day <= daysInMonth; day++) {
  const date = new Date(year, month, day);
  if (date.getDay() === 5) { 
    const formatted = date.toLocaleDateString('uk-UA');
    const li = document.createElement('li');
    li.textContent = formatted;
    fridaysList.appendChild(li);
  }
}
