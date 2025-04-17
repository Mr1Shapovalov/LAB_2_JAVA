// Варіант №17 ,завдання:
// Створити клас Бібліотека, який містить масив книг.
// та відразу додаткове завдання: 
// спочатку зробіть ваш варіант, потім додайте у Бібліотеку метод додатиКнигу() для додавання книги до масиву

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    description() {
      return `${this.title} by ${this.author}`;
    }
  }
  class Library {
    constructor() {
      this.books = [];
    }
    // Метод для додавання книги в бібліотеку (додаткове завдання)
    addBook(book) {
      this.books.push(book);
    }
  
    listBooks() {
      if (this.books.length === 0) {
        console.log("Бібліотека порожня.");
      } else {
        console.log("Книги в бібліотеці:");
        this.books.forEach(book => console.log(book.description()));
      }
    }
  }
  const library = new Library();
  const book1 = new Book("1984", "Джордж Орвелл");
  const book2 = new Book("Мобі Дік", "Герман Мелвілл");
  library.addBook(book1); 
  library.addBook(book2); 
  library.listBooks();
  