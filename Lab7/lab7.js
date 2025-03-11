//Варіант №17 ,завдання: Дано масив об’єктів (ім’я, вік). Використати sort() для сортування за віком

let people = [
    { name: "Анна", age: 25 },
    { name: "Іван", age: 30 },
    { name: "Марія", age: 22 },
    { name: "Олексій", age: 35 }
  ];
  console.log("Початковий масив об'єктів:", people);
  // Сортуємо за віком
  let sortedPeople = people.sort((a, b) => a.age - b.age);
  console.log("Відсортований масив за віком:", sortedPeople);
  