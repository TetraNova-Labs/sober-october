# Multi-stage build for React app
FROM node:24-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage with nginx
FROM nginx:alpine AS production

# Copy built assets from base stage
COPY --from=base /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create non-root user
RUN addgroup -g 1001 -S nginx
RUN adduser -S react -u 1001

# Change ownership of nginx directories
RUN chown -R react:nginx /usr/share/nginx/html
RUN chown -R react:nginx /var/cache/nginx
RUN chown -R react:nginx /var/log/nginx
RUN chown -R react:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid
RUN chown -R react:nginx /var/run/nginx.pid

# Switch to non-root user
USER react

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
