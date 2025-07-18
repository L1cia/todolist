console.log("To-do list");

const input = document.getElementById("input");
const button = document.querySelector("button");
const todoList = document.querySelector("#todoList");
const container = document.getElementById("container");

const emptyState = document.createElement('p');

const checkForEmptyState = function() {
    if(todoList.children.length < 1){
        emptyState.textContent = "You have no todos for today!";


        container.appendChild(emptyState);
    } else {
        if(todoList.children.length === 1){
            container.removeChild(emptyState);
        }
    }
}

button.addEventListener("click", () => {
    const inputValue = input.value;
    

    if(inputValue === "") {
        alert("Please enter a todo!!!");
        return
    }


    const todo = document.createElement("li");
    todo.textContent = inputValue;
    todo.setAttribute("class", "todo-item");


    const completeBtn = document.createElement("button");
    completeBtn.textContent = "mark as complete";

    completeBtn.addEventListener("click", () => {
        todo.style.textDecoration = "line-through";
        completeBtn.textContent = "completed"
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(todo);
        checkForEmptyState();
    })


    todo.appendChild(completeBtn);
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    input.value = "";
    input.focus();
    
    checkForEmptyState();
});

checkForEmptyState()