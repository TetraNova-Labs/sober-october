.PHONY: env test-e2e

# Copy your e2e env into .env so ConfigModule.forRoot() picks it up
PHONY .SILENT: env
env:
	cp .env.e2e .env

PHONY .SILENT: init-config-file
init-config-file:
	cp ./.env.template ./.env

PHONY .SILENT: test-ci
test-ci:
	#$(MAKE) init-config-file
	pnpm test


PHONY .SILENT: lint-fix # Is ran as a pre-commit hook
lint-fix:
	${NVM_DIR}/nvm-exec pnpm lint
	npx prettier . --fix
