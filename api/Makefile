.PHONY: env test-e2e

# Copy your e2e env into .env so ConfigModule.forRoot() picks it up
env:
	cp .env.e2e .env

PHONY .SILENT: init-config-file
init-config-file:
	cp ./.env.template ./.env

PHONY .SILENT: test-ci
test-ci:
	$(MAKE) init-config-file
	pnpm test
	pnpm test:e2e
