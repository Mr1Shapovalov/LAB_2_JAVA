// Варіант №17 ,завдання:
// Реалізувати лічильник відвідувань сторінки.

window.addEventListener('load', () => {
  let visits = localStorage.getItem('visitCount');
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem('visitCount', visits);
  document.getElementById('visit-count').textContent = `Кількість відвідувань: ${visits}`;
});

// Додаткове завдання на 5 балів:
// Створити список контактів, які зберігаються в LocalStorage.

const form = document.getElementById('contact-form');
const list = document.getElementById('contact-list');
form.onsubmit = e => {
  e.preventDefault();
  const name = name.value;
  const phone = phone.value;
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push({ name, phone });
  localStorage.setItem('contacts', JSON.stringify(contacts));
  showContacts();
  form.reset();
};
function showContacts() {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  list.innerHTML = contacts.map(c => `<li>${c.name}: ${c.phone}</li>`).join('');
}
showContacts();
