// Варіант №25 ,завдання:
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