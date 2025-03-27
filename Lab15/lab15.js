// Варіант 17, завдання:
// Реалізувати функцію, яка повертає іншу функцію.

function createMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }
  const multiplyByNumbers = createMultiplier(6);
  
  const multiplyByNum = createMultiplier(3);

  console.log(multiplyByNumbers(8)); 
  console.log(multiplyByNum(10)); 

  // Додаткове завдання:
  // Написати функцію, яка приймає масив функцій і виконує їх послідовно.

  function executeFunctions(functionsArray) {
    functionsArray.forEach(func => func()); 
  }
  function greet() {
    console.log("Привіт світ! Як життя???");
  }
  function sayGoodbye() {
    console.log("Усе бай бай! ");
  }
  executeFunctions([greet, sayGoodbye]);
  