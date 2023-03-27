const { Menu } = require("electron");
const { createAboutWindow } = require("../windows");

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
  {
    label: "Kömək",
    submenu: [
      {
        label: "Haqqımızda",
        click: createAboutWindow
      },
    ]
  }
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
