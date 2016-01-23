.PHONY: javascripts/gear.js javascripts/ltsv.js

compile: javascripts/gear.js javascripts/ltsv.js
javascripts/gear.js: javascripts/gear.coffee
	coffee -c -b javascripts/gear.coffee
javascripts/ltsv.js: javascripts/ltsv.coffee
	coffee -c -b javascripts/ltsv.coffee

run:
	./node_modules/.bin/electron .

dmg: compile
	asar pack . /tmp/Gear.app/Contents/Resources/app.asar
	/bin/rm -f /tmp/Gear.dmg
	hdiutil create -srcfolder /tmp/Gear.app -volname Gear /tmp/Gear.dmg

clean:
	/bin/rm -r -f node_modules *~

setup: clean
	npm i electron-prebuilt
