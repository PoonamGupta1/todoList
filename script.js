const todoList = JSON.parse(localStorage.getItem('todolist')) || [];

renderTodayList();
function addListInsideArray() {
  const todo = document.querySelector(".input");
  const todoDate = document.querySelector(".inputDate");
  const value = todo.value.trim();
  const valueDate = todoDate.value;
  if (!value || !valueDate) {
    alert("Please enter a task name and date!");
    return;
  }

  todoList.push({
    name: value,
    date: valueDate,
  });
  // Clear input fields
  todo.value = "";
  todoDate.value = "";
  renderTodayList();
}
function renderTodayList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const date = todoObject.date;
    const html = `
        <div class = "todo-name">${name}</div>
        <div>${date}</div>
        <button class="js-delete" onclick="deleteTodo(${i})"><i class="fa-solid fa-trash"></i></button>
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

for (let i = 1;i<=30;i++){
  if(i % 3 == 0){
    console.log(i);
  }else {
    continue;
  }
}

i = 1;
while(i<=10){
  if(i%3 == 0){
    i++;
    continue;
  }else {
    console.log(i);
  }
  i++;
}