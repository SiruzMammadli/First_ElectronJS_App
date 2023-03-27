const { ipcRenderer } = require("electron");

const addBtn = document.getElementById("addTodoBtn");
const todoInput = document.getElementById("todoInput");

addBtn.addEventListener("click", function () {
  ipcRenderer.send("mainWindow:action:addNewTodo", todoInput.value);
});
