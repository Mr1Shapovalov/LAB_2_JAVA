// Варіант №17, завдання:
// Напишіть функцію sortNumbers, яка приймає масив чисел і callback-функцію для визначення порядку сортування

const sortNumbers = (arr, callback) => {
    return arr.sort(callback);
};

const ascendingOrder = (a, b) => a - b;
const descendingOrder = (a, b) => b - a;

const numbers = [5, 3, 8, 1, 2];

console.log(sortNumbers(numbers, ascendingOrder));  
console.log(sortNumbers(numbers, descendingOrder)); 
