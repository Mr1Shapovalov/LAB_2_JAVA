// Варіант №17 ,завдання:
// Створити галерею з можливістю видалення кожного зображення

const gallery = document.getElementById('gallery');
const images = [
    'https://placebear.com/200/140', 
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg' 
];
images.forEach(src => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    img.src = src;
    img.style.width = '150px';
    btn.textContent = 'Видалити';
    btn.onclick = () => div.remove();
    div.append(img, btn);
    gallery.appendChild(div);
});

// Додаткове завдання на 5 балів:
// Додати кнопку, яка додає нові елементи в кінець списку

const myList = document.getElementById('myList');
const addButton = document.getElementById('addButton');
let count = myList.children.length + 1;
addButton.onclick = () => {
    const li = document.createElement('li');
    li.textContent = 'Елемент ' + count++;
    myList.appendChild(li);
};