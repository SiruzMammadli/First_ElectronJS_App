const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

//#region Main Window
function createMainWindow() {
  let mainWindow = new BrowserWindow({
    title: "Basic Todo App",
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    // fullscreen: true, //Fullscreen etmek ucun
    autoHideMenuBar: true, // Menu bari avto gizletsin acmaq ucun Alt duymesin bas
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // mainWindow.setResizable(false); // Pencereni boyuyub kicildmeye icaze vermemek

  mainWindow.loadFile(path.join(__dirname, "../../ui/main.html"));
  mainWindow.on("close", () => app.quit()); // Esas pencere baglanarsa digerleri de baglansin deye

  ipcMain.on("mainWindow:action:addNewTodo", (err, data) => {
    console.log(data);
  });
}
//#endregion

//#region About Window
function createAboutWindow() {
  let aboutWindow = new BrowserWindow({
    width: 400,
    height: 500,
    title: "Haqqımızda",
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  aboutWindow.loadFile(path.join(__dirname, "../../ui/about.html"));
  aboutWindow.on("close", () => (aboutWindow = null)); // Ram da yer tutmasin deye windowu null a beraber etmek

  ipcMain.on("aboutWindow:action:closeBtn", function () {
    aboutWindow.close();
    aboutWindow = null;
  });
}
//#endregion

module.exports = { createMainWindow, createAboutWindow };
