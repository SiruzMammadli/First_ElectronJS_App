const { ipcRenderer } = require("electron");

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  ipcRenderer.send("key", "Hello World");
});