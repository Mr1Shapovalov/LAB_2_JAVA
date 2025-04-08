// Варіант №17 ,завдання:
// Визначити найбільше та найменше значення у масиві.

const numbers = [5, 12, 8, 21, 1, 14, 7];
let min = numbers[0];
let max = numbers[0];
numbers.forEach((num) => {
  if (num < min) {
    min = num; 
  }
  if (num > max) {
    max = num; 
  }
});
console.log(`Найменше значення: ${min}`);
console.log(`Найбільше значення: ${max}`);
