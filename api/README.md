

## Migrations

database must be running 
``docker-compose up -d``

and env variables set
``make init-config-file`` or run ``make prepare-dev-env`` from the root of the project


``nvm exec pnpm migration:generate src/migrations/CreateUserTable`` -- creates migration from current changes and saves it to the /src/migration/...
``nvp migration:run`` runs all migrations
