start:
	php -S localhost:8000

 build:
	@echo 'building...'
	@npm i

 deploy:
	@echo 'deploying...'
	@node deploy.js
