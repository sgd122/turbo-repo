# Base image to build from
FROM node:18-alpine AS builder

# Update and install necessary packages
RUN apk update && apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Install turbo globally
RUN yarn global add turbo

# Copy all files to the container
COPY . .

# Prune unnecessary dependencies and prepare for Docker
RUN turbo prune --scope=storybook --docker

# Install dependencies only for the pruned version
FROM node:18-alpine AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# Copy lockfile and package.json files from the builder stage
COPY --from=builder /app/out/json/ .

# Install production dependencies
RUN yarn install

# Copy the full project code
COPY --from=builder /app/out/full/ .

# Build the storybook
RUN yarn turbo run build --filter=storybook...

# Serve static files using Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Copy the built storybook static files from the installer stage
COPY --from=installer /app/apps/storybook/storybook-static/ .

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx to serve the static files
CMD ["nginx", "-g", "daemon off;"]