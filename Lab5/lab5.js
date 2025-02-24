//1
for (let i=2; i<=20; i+=2) {
    console.log(i);
}

//2
let n=17;
while (n>=1) {
    console.log(n);
    n--;
}

//3
let number = "8";
do {
    //number = prompt("Введіть позитивне число:");
} while (number <= 0);
console.log(`Ви ввели число: ${number}`);

//4
let obj = {name: "Michael", age: 18.5};
for (let key in obj) {
    console.log(`${key}:${obj[key]}`);
}

//5
let numbers = [2,12,22,32];
for (let item of numbers.slice().reverse()) {
    console.log(item);
}
console.log(numbers);

//6
let numbers17 = [3,13,23,33];
numbers17.forEach(num => console.log(num));
let numbers2 = numbers17.map(num => num*2);
console.log(numbers2);
console.log(numbers17);
let numbers3 = numbers17.filter(num => num >10 );
console.log(numbers3);
console.log(numbers17);