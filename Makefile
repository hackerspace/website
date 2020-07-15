all: build

install: build
	cp index.html /var/www/html
	cp -R {js,photos,css,font} /var/www/html
	cp favicon.ico /var/www/html
	cp logo.png /var/www/html

build: index.html

index.html: index.html.haml
	haml -f html5 index.html.haml index.html

clean:
	rm index.html

watch-build:
	while true; do inotifywait -r -e close_write .; make; done

