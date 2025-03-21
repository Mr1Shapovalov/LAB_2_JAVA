// Варіант 17 ,завдання:
// Реалізувати клас “Телефон” із методом зателефонувати(), який перевизначається у “Смартфон”

class Phone {
    call(number) {
        console.log(`Телефон дзвонить на номер: ${number}`);
    }
}
class Smartphone extends Phone {
    call(number) {
        console.log(`Смартфон дзвонить через мобільну мережу або інтернет на номер: ${number}`);
    }
}
const simplePhone = new Phone();
simplePhone.call("123-456-789");
const smartPhone = new Smartphone();
smartPhone.call("987-654-321");