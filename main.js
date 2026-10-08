const { app, BrowserWindow, screen } = require("electron");

function createWindow() {
    const { width } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        width: 200,
        height: 400,

        x: width - 220,
        y:0,

        frame: false,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,

        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);