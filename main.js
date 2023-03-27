const { app, ipcMain } = require("electron");
const { createAppMenu } = require("./src/components/menus/app-menu");
const { createMainWindow } = require("./src/components/windows");

app.on('ready', () => {
  createMainWindow();
  createAppMenu();

  ipcMain.on("input:value", (err, data) => {
    console.log(data);
  });

});
