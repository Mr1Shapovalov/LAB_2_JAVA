// Варіант №17 ,завдання:
// Створити анімацію зміни розміру елемента.

const box = document.getElementById('box');
const resizeButton = document.getElementById('resizeButton');
let size = 200;
box.style.width = size + 'px';
box.style.height = size + 'px';
box.style.backgroundColor = '#3498db';
box.style.color = 'white';
box.style.textAlign = 'center';
box.style.lineHeight = size + 'px';
box.style.marginBottom = '20px';
resizeButton.addEventListener('click', function() {
    size = size === 200 ? 400 : 200;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.lineHeight = size + 'px';
});

// Додаткове завдання:
// Видалити останній елемент списку після натискання кнопки.

const list = document.getElementById('myList');
const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});
