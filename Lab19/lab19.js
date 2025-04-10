// Варіант №17 ,завдання:
// Обчислити загальну довжину всіх рядків у масиві.

const strings = ["Пивіт", "мене", "звати", "Міша", "і", "я", "з", "України"];
const totalLength = strings.reduce((acc, str) => acc + str.length, 0);

console.log(totalLength);

// Додаткове завдання на 5 балів:
// Підрахувати кількість парних та непарних чисел у масиві

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even += 1;
  } else {
    acc.odd += 1;
  }
  return acc;
}, { even: 0, odd: 0 });

console.log(count);  