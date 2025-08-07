
.PHONY:
prepare-dev-env:
	echo "Preparing dev environment ..."
	pnpm prepare

	echo "Copy dev environment variables"
	cp ./client/.env.template ./client/.env
	cp ./api/.env.template ./api/.env


.PHONY: install-api
install-api:
	cd api && ${NVM_DIR}/nvm-exec pnpm install

.PHONY: run-api
run-api:
	cd api && ${NVM_DIR}/nvm-exec pnpm start:dev


.PHONY: install-client
install-client:
	cd client && ${NVM_DIR}/nvm-exec pnpm install

.PHONY: run-client
run-client:
	cd client && ${NVM_DIR}/nvm-exec pnpm dev

.PHONY: start-containers
start-containers:
	docker-compose up -d


.PHONY: all
all:
	echo "Preparing dev environment!"
	make prepare-dev-env

	echo "Starting docker containers"
	make start-containers

	echo "Installing dependencies"
	make install-api && make install-client

	echo "Running migrations"
	cd api && ${NVM_DIR}/nvm-exec pnpm migration:run



