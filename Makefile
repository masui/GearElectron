.PHONY: data.json javascripts/gear.js javascripts/ltsv.js javascripts/contents.js

compile: javascripts/gear.js javascripts/ltsv.js javascripts/contents.js
javascripts/gear.js: javascripts/gear.coffee
	coffee -c -b javascripts/gear.coffee
javascripts/ltsv.js: javascripts/ltsv.coffee
	coffee -c -b javascripts/ltsv.coffee
javascripts/contents.js: javascripts/contents.coffee
	coffee -c -b javascripts/contents.coffee

run:
	./node_modules/.bin/electron .

dmg: compile
	asar pack . /tmp/Gear.app/Contents/Resources/app.asar
	/bin/rm -f /tmp/Gear.dmg
	hdiutil create -srcfolder /tmp/Gear.app -volname Gear /tmp/Gear.dmg
