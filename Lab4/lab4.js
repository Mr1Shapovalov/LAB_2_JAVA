//1
let t = 40
//let t = prompt("Введiть температуру");
if (t > 30) {
    console.log("Дуже спекотно");
} else if (t >=15 && t <=30) {
    console.log("Тепла погода");
} else {
    console.log("Холодна погода");
}

//2
let number = 24;
//let number = prompt("Введiть число");
let result = number % 2 === 0 ? "Парне" : "Не парним";
console.log(`Число ${number} є ${result}`);

//3 
// let weekDay = prompt("Введiть день тижня: ").toLowerCase();
let weekDay = "понеділок";
switch (weekDay) {
    case "понеділок":
        console.log("Сьогоднi понедiлок - перший день тижня");
        break;
    case "вiвторок":
        console.log("Сьогоднi вiвторок - другий день тижня");
        break;
    case "середа":
        console.log("Сьогоднi середа - третій день тижня");
        break;
    case "четвер":
        console.log("Сьогоднi четвер - четвертий день тижня");
        break;
    case "п'ятниця":
        console.log("Сьогоднi п'ятниця - п'ятий день тижня");
        break;
    case "субота":
        console.log("Сьогоднi субота - шостий день тижня");
        break;
    case "недiля":
        console.log("Сьогоднi недiля - сьомий день тижня");
        break;
    default:
        console.log("Такого дня не iснує - перевір правильно все написано");
}

//4
let password = "admin345";
//let password = prompt("Введiть пароль");
if (password === "admin123"){
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}