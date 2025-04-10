// Варіант №17 ,завдання:
// Відфільтрувати масив об’єктів за кількома критеріями одночасно.

const users = [
    { name: "Іван", age: 25, city: "Київ", isActive: true },
    { name: "Анна", age: 17, city: "Львів", isActive: true },
    { name: "Петро", age: 30, city: "Київ", isActive: false },
    { name: "Олена", age: 22, city: "Київ", isActive: true },
    { name: "Тарас", age: 19, city: "Одеса", isActive: true },
  ];
  
  const filteredUsers = users.filter(user => 
    user.age > 18 &&
    user.city === "Київ" &&
    user.isActive
  );
  
  console.log(filteredUsers);

// Додаткове завдання на 5 балів:
// Відфільтрувати список продуктів, залишивши лише ті, що є в наявності.

const products = [
    { name: "Хліб", price: 20, available: true },
    { name: "Молоко", price: 25, available: false },
    { name: "Яблука", price: 15, available: true },
    { name: "Масло", price: 45, available: false },
    { name: "Сир", price: 60, available: true }
  ];
  
  const availableProducts = products.filter(product => product.available);
  
  console.log(availableProducts);