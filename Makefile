all: build

install: build
	cp index.html /var/www/html
	cp grid.css /var/www/html

build: index.html grid.css

index.html: index.html.haml
	haml -f html5 index.html.haml index.html

clean:
	rm index.html
