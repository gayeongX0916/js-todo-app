const addBtn = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");

function createTodo(text, isDone = false) {
  // todo 글자
  const todoText = document.createElement("span");
  todoText.textContent = text;
  todoText.className = "todo-text";
  if (isDone) todoText.classList.add("done");

  // 완료 버튼
  const doneBtn = document.createElement("input");
  doneBtn.type = "checkbox";
  doneBtn.checked = isDone;

  // 글자 + 버튼 묶은 거
  const leftWrapper = document.createElement("div");
  leftWrapper.appendChild(doneBtn);
  leftWrapper.appendChild(todoText);
  leftWrapper.className = "todo-left-wrapper";

  // 삭제 버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제하기";
  deleteBtn.className = "todo-delete-btn";

  // li
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";
  todoItem.appendChild(leftWrapper);
  todoItem.appendChild(deleteBtn);

  // 완료 버튼 기능
  doneBtn.addEventListener("click", () => {
    todoText.classList.toggle("done");

    saveItems();
  });

  // 삭제 버튼 기능
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();

    saveItems();
  });

  todoList.appendChild(todoItem);

  todoInput.value = "";

  saveItems();
}

function handleAddTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  createTodo(text);
}

addBtn.addEventListener("click", handleAddTodo);

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAddTodo();
  }
});

function saveItems() {
  const todos = Array.from(todoList.children).map((li) => ({
    contents: li.querySelector("span").textContent,
    done: li.querySelector("span").classList.contains("done"),
  }));
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadItems() {
  const savedTodoItems = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodoItems.forEach(({ contents, done }) => {
    createTodo(contents, done);
  });
}

loadItems();
