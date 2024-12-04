# Use Node.js 20 as base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy source files
COPY src/ ./src/
COPY .env ./.env

# Build the application
#RUN pnpm run build

# Expose port 5000 (as defined in .replit)
EXPOSE 5000

# Start the application
CMD ["pnpm", "start"]