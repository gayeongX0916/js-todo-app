const addBtn = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  // todo 글자
  const todoText = document.createElement("span");
  todoText.textContent = text;
  todoText.className = "todo-text";

  // 완료 버튼
  const doneBtn = document.createElement("input");
  doneBtn.type = "checkbox";

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
  });

  // 삭제 버튼 기능
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });

  todoList.appendChild(todoItem);

  todoInput.value = "";
});
