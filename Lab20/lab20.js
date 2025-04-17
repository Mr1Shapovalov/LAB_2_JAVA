// Варіант №17 ,завдання:
// Перевірити значення this у стрілковій функції.

const outerObject = {
    name: "Outer",
    showThis: function () {
      const arrowFunc = () => {
        console.log("this у стрілковій функції:", this);
      };
      arrowFunc();
    }
  };
  
  outerObject.showThis();

  // Додаткове завдання:
  // Написати клас із методом, який використовує this.

  class User {
    constructor(name) {
      this.name = name;
    }
    hi() {
      console.log(this.name);
    }
  }
  
  new User("Міша").hi();

