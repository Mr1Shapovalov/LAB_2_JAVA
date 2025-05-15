// Варіант №17 ,завдання:
// Використати SessionStorage для збереження позиції скролу сторінки.

window.addEventListener('scroll', () => {
  sessionStorage.setItem('scrollY', window.scrollY);
});
window.addEventListener('load', () => {
  const savedScroll = sessionStorage.getItem('scrollY');
  if (savedScroll !== null) {
    window.scrollTo(0, parseInt(savedScroll, 10));
  }
});

// Додаткове завдання на 5 балів:
// Зберегти значення чекбоксів і радіо-кнопок у LocalStorage

const form = document.getElementById('settings-form');
window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('formData')) || {};
  Object.entries(savedData).forEach(([name, value]) => {
    const elements = form.elements[name];
    if (elements) {
      if (elements.type === 'checkbox' || elements.length === undefined) {
        elements.checked = value;
      } else {
        [...elements].forEach(el => {
          if (el.value === value) el.checked = true;
        });
      }
    }
  });
});
form.addEventListener('change', () => {
  const formData = {};
  Array.from(form.elements).forEach(el => {
    if (el.type === 'checkbox') {
      formData[el.name] = el.checked;
    } else if (el.type === 'radio' && el.checked) {
      formData[el.name] = el.value;
    }
  });
  localStorage.setItem('formData', JSON.stringify(formData));
});