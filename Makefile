.PHONY: javascripts/gear.js javascripts/ltsv.js

compile: javascripts/gear.js javascripts/ltsv.js
javascripts/gear.js: javascripts/gear.coffee
	coffee -c -b javascripts/gear.coffee
javascripts/ltsv.js: javascripts/ltsv.coffee
	coffee -c -b javascripts/ltsv.coffee

run:
	./node_modules/.bin/electron .

dmg: compile
	asar pack . /tmp/electron/Gear.app/Contents/Resources/app.asar
	/bin/rm -f /tmp/electron/Gear.dmg
	hdiutil create -srcfolder /tmp/electron/Gear.app -volname Gear /tmp/electron/Gear.dmg

upload: dmg
	scp /tmp/electron/Gear.dmg pitecan.com:/www/www.pitecan.com/tmp

clean:
	/bin/rm -r -f node_modules *~

setup: clean
	npm i electron-prebuilt

template:
	/bin/rm -r -f /tmp/electron
	mkdir /tmp/electron
	wget https://github.com/atom/electron/releases/download/v0.36.5/electron-v0.36.5-darwin-x64.zip -O /tmp/electron/electron.zip
	cd /tmp/electron; unzip electron.zip; mv Electron.app  Gear.app
