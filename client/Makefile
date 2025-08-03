PHONY .SILENT: lint-fix # Is ran as a pre-commit hook
lint-fix:
	${NVM_DIR}/nvm-exec pnpm lint
	npx prettier . --fix
