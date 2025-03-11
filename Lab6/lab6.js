//Варіант №17, завдання: Написати програму, яка реверсує елементи масиву без використання reverse().

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
// Приклад використання
let originalArray = [1, 2, 3, 4, 5];
console.log("Оригінальний масив:", originalArray);
let reversedArray = reverseArray(originalArray);
console.log("Реверсований масив:", reversedArray);
