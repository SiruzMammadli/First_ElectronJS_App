const closeBtn = document.getElementById("closeBtn");

const { ipcRenderer } = require("electron");

closeBtn.addEventListener("click", function () {
  ipcRenderer.send("aboutWindow:action:closeBtn");
});
