const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
renderTodayList();

function addListInsideArray() {
  const todo = document.querySelector(".input");
  const value = todo.value.trim();

  if (!value) {
    alert("Please enter a task name!");
    return;
  }

  todoList.push({ name: value });
  todo.value = "";

  renderTodayList();
}

function renderTodayList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const html = `
      <div class="todo-name">${name}</div>
      <button class="js-delete" onclick="deleteTodo(${i})">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    todoListHTML += html;
  }

  localStorage.setItem('todolist', JSON.stringify(todoList));
  document.querySelector(".js-todolist").innerHTML = todoListHTML;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todolist', JSON.stringify(todoList));
  renderTodayList();
}

function handle(event) {
  if (event.key == "Enter") {
    addListInsideArray();
  }
}
