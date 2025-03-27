// Варіант №17 ,завдання:
// Використати spread у функції для знаходження максимального числа в масиві.

function findMax(...numbers) {
    return Math.max(...numbers); 
  }
  let arr = [10, 25, 5, 8, 13];
  console.log(findMax(...arr));  
  