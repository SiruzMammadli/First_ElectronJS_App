const { app, ipcMain } = require("electron");
const { createMainWindow } = require("./src/components/windows/main-window.js");
const { createAppMenu } = require("./src/components/menus/app-menu");

app.whenReady().then(() => {
  createMainWindow();
  createAppMenu();

  ipcMain.on("key", (err, data) => {
    console.log(data);
  });
});
