let todoItems = [];

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        todoItems.push(todoText);
        todoInput.value = "";
        displayTodos();
    }
}

function displayTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    todoItems.forEach((todo, index) => {
        const todoElement = document.createElement("li");
        todoElement.textContent = todo;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete❌";
        deleteButton.classList.add("delete-btn");
        deleteButton.setAttribute("onclick", `deleteTodo(${index})`);

        todoElement.appendChild(deleteButton);
        todoList.appendChild(todoElement);
    });
}

function deleteTodo(index) {
    todoItems.splice(index, 1);
    displayTodos();
}


