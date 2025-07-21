FROM node:24-alpine AS builder

# set working directory
WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy root and api manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY api/package.json api/

# install only dependencies (hoisted) and api deps
RUN pnpm install --frozen-lockfile --filter api...

# copy the rest of the code
COPY . .

# build the NestJS app
WORKDIR /app/api
RUN pnpm run build


# Stage 2: production image
FROM node:24-alpine AS runner
WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy production dependencies only
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
COPY api/package.json api/
RUN pnpm install --prod --frozen-lockfile --filter api...

# copy the built files
COPY --from=builder /app/api/dist ./dist

# expose the port your NestJS app listens on
EXPOSE 3000

# default command
CMD ["node", "dist/main.js"]
