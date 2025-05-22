// Варіант №17 ,завдання:
// Використати async/await для читання файлу (імітація) та обробки вмісту.

async function readFile() {
  const fileResult = document.getElementById("fileResult");
  fileResult.textContent = "Читання файлу...";
  try {
    const content = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Це вміст файлу (імітація).");
      }, 1500);
    });
    fileResult.textContent = `Файл прочитано: ${content}`;
  } catch (error) {
    fileResult.textContent = "Помилка читання файлу.";
  }
}

// Додаткове завдання на 5 балів: Варіант №19:
// Реалізувати асинхронну перевірку паролю з очікуванням 1.5 секунди.

async function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const result = document.getElementById("passwordResult");
  result.textContent = "Перевірка...";
  try {
    const check = await new Promise((resolve, reject) => {
      setTimeout(() => {
        password === "1234" ? resolve("Пароль правильний.") : reject("Невірний пароль.");
      }, 1500);
    });
    result.textContent = check;
  } catch (error) {
    result.textContent = error;
  }
}