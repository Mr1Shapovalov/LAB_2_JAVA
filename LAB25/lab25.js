// Варіант №17 ,завдання:
// Створити інпут через JavaScript та додати обробку введення тексту.

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введіть текст...";
const output = document.createElement("p");
output.textContent = "Ви ще нічого не ввели.";
input.addEventListener("input", function () {
  output.textContent = "Ви ввели: " + input.value;
});
const container = document.getElementById("container");
container.appendChild(input);
container.appendChild(output);

// Варіант №20 ,завдання:
// Змінювати текст заголовка при наведенні миші на нього.

const header = document.getElementById("header");
header.addEventListener("mouseover", function() {
  header.textContent = "Текст змінений!";
});
header.addEventListener("mouseout", function() {
  header.textContent = "Наведіть на мене, щоб змінити текст!";
});
