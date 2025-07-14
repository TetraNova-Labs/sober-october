# Vite + React App

This project is built using Vite and React, with a focus on fast development and modern tooling.

## ⚙️ Requirements
Node.js v24

This project requires Node.js version 24.
Enforced via .nvmrc (for nvm users).
Also specified in package.json under the engines field.
pnpm
The project uses pnpm for managing dependencies.
To install pnpm globally:

`npm install -g pnpm`

## 🚀 Getting Started

1. Set up environment variables
   Copy the environment template and edit it as needed:
`cp .env.template .env`

2. Install dependencies
   `pnpm install` (if you have _nvm_ installed you can use `nvm exec pnpm install`, which enforces node v24) _nvm enforces to use 
 projects node version which ensures compatibility and same environment as production_

3. Start the development server
   `pnpm dev` (`nvm exec pnpm dev`)
   The app will be running at: http://localhost:5173

### 🛠 Troubleshooting

Make sure you are using Node.js v24. If using nvm, run:
nvm use
If you encounter dependency issues, try clearing everything and reinstalling:
rm -rf node_modules pnpm-lock.yaml
pnpm install
