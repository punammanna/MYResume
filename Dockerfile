# Use Node 22 LTS
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the React + Vite project
RUN npm run build

# Use a lightweight server to serve the built files
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Start the server to serve the build folder
CMD ["serve", "-s", "dist", "-l", "5000"]
