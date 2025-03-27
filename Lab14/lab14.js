// Варіант 17, завдання:
// Використати Стрілкову функцію для створення функції, яка перевіряє, чи всі елементи
// масиву більше заданого числа.

const allGreaterThan = (arr, num) => arr.every(element => element > num);

console.log(allGreaterThan([6, 17, 45], 5));  
console.log(allGreaterThan([0, 4, 3], 5));   

// Додаткове завдання:
// Використати Стрілкову функцію для створення функції, яка повертає найбільше з трьох чисел.
const maxOfThree = (a, b, c) => Math.max(a, b, c);
console.log(maxOfThree(3, 80, 41));