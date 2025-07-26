
.PHONY: prepare-dev-env
prepare-dev-env:
	echo "Preparing dev environment ..."
	pnpm prepare

	echo "Copy dev environment variables"
	cp ./client/.env.template ./client/.env
	cp ./api/.env.template ./api/.env


.PHONY: run-api
run-api:
	cd api && ${NVM_DIR}/nvm-exec pnpm start:dev

.PHONY: run-client
run-client:
	cd client && ${NVM_DIR}/nvm-exec pnpm dev
