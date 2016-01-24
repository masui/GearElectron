//
// Electron版GearのメインNodeプログラム
//
'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

let menuWindow = null;

app.on('window-all-closed', function () {
    app.quit();
});

//
// ~/.gear に、ログインサイトごとのパスワードを書いておく
// 
// {
//    "video.masuilab.org": {
//      "user": "username",
//      "pass": "@#$%^&*"
//   }
// }

var conf = { root: "", gyazz: "" };
var fs = require('fs');
try {
    var conffile = process.env['HOME'] + "/.gear";
    conf = JSON.parse(fs.readFileSync(conffile, 'utf8'));
} catch(e) {
    console.log(e);
}

console.log(conf.root);

app.on('login', function(event, webContents, request, authInfo, callback) {
    event.preventDefault();
    var info = conf["auth"][authInfo.host];
    if(info){
	callback(info.user, info.pass);
    }
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
    menuWindow.loadURL(`file://${__dirname}/index.html`+'?root='+conf.root+'&gyazz='+conf.gyazz);
    menuWindow.on('closed', function () {
	menuWindow = null;
	app.quit();
    });
});
