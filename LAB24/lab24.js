// Варіант №17 ,завдання:
// Додати можливість видалити елемент списку при натисканні на нього.

const list = document.getElementById("myList");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove(); 
    }
});
