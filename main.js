const { app, BrowserWindow } = require('electron');

let window;

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Contact App',
        frame: false
    });

    window.loadFile('files/html/main.html');
}

app.on('ready', createWindow);