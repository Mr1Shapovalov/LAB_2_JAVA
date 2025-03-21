// Варіант №17 ,завдання:
// Використати rest для створення функції, яка обчислює суму квадратів переданих чисел.

function sumOfSquares(...numbers) {
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}
console.log(sumOfSquares(1, 2, 3)); 
console.log(sumOfSquares(4, 5, 6, 7)); 