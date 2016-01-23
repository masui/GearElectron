'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

let menuWindow = null;
let contentsWindow = null;

app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    const Screen = require('screen');
    const size = Screen.getPrimaryDisplay().workAreaSize;

    menuWindow = new BrowserWindow({
	x: 0,
	y: 0,
	width: Math.floor(size.width / 5), // 整数でないとダメ
	height: size.height,
	frame: true,
	show: true,
	transparent: false,
	resizable: true,
	'always-on-top': true,
	'node-integration': true
    });
    menuWindow.loadURL(`file://${__dirname}/index.html`);
    menuWindow.on('closed', function () {
	menuWindow = null;
	app.quit();
    });
});
