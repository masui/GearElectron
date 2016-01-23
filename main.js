'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

//var remote = require('remote');

//const remote = require('remote');
//const RemoteBrowserWindow = remote.require('browser-window');

//const ipc = require('ipc');

let menuWindow = null;
let contentsWindow = null;

//ipc.on('openurl', function(event, arg) { // menuWindowからの要求
//    console.log(arg);
//
//    contentsWindow.loadUrl(arg);
//});

//require('crash-reporter').start();

app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    const Screen = require('screen');
    const size = Screen.getPrimaryDisplay().workAreaSize;

//    contentsWindow = new RemoteBrowserWindow({
//	x: Math.floor(size.width / 5),
//	y: 0,
//	width: Math.floor(size.width * 4 / 5),
//	height: size.height,
//        frame: false,
//	show: true,
//	transparent: false,
//        resizable: true,
//        'always-on-top': false
//    });
//    contentsWindow.on('closed', function () {
//	contentsWindow = null;
//    });

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
