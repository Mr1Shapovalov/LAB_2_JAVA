// Варіант №17 ,завдання:
// Додати можливість видалити елемент списку при натисканні на нього.

document.getElementById("myList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove(); 
    }
});

// Варіант №19 ,завдання:
// Показувати спливаючу підказку при наведенні на елемент.

const target = document.getElementById('tooltip-target');
const tooltip = document.getElementById('tooltip');
target.addEventListener('mouseover', () => tooltip.style.display = 'block');
target.addEventListener('mouseout', () => tooltip.style.display = 'none');
