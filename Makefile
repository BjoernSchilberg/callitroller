.PHONY: install build clean

install:
	npm install -g pxt
	pxt target calliopemini
	pxt install

build:
	rm -rf built	
	pxt build

clean:
	rm -rf built/ node_modules/ pxt_modules/
	rm -f package-lock.json package.json tsconfig.json
