install:
	./mega-install.sh

dev:
	npm run dev

build:
	npm run build

deploy:
	./deploy.sh

docker:
	docker build -t flight-sim .

run-docker:
	docker run -p 8080:80 flight-sim