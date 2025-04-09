// Варіант №17 ,завдання:
// Перетворити масив рядків у масив об’єктів із властивістю length.

const strings = ["apple", "banana", "kiwi", "grape"];
const result = strings.map(str => {
    return { length: str.length };
});

console.log(result);
