install: build
		cp index.html /var/www/html
	  cp grid.css /var/www/html

build: index.html grid.css

index.html: index.html.haml
		haml index.html.haml index.html

