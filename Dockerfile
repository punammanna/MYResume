# Build stage
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:18

WORKDIR /app

# Install serve to serve static files
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]
