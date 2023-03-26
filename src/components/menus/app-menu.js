const { Menu } = require("electron");

function createAppMenu() {
  const appMenu = Menu.buildFromTemplate(appMenuTemplate);
  Menu.setApplicationMenu(appMenu);
}

const appMenuTemplate = [
  {
    label: "Fayl",
    submenu: [
      {
        label: "Çıxış",
        accelerator: "Ctrl+Q",
        role: "quit",
      },
    ],
  },
];

if (process.env.NODE_ENV !== "production") {
  appMenuTemplate.push({
    label: "Dev Tools",
    submenu: [
      {
        label: "Dev Tools-u aç",
        click: (item, focusedWindow) => {
          focusedWindow.toggleDevTools();
        },
      },
      {
        label: "Yenilə",
        role: "reload",
      },
    ],
  });
}

module.exports = { createAppMenu };
