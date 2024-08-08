# Use the official Node.js image
FROM node:20-alpine3.17

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) first
COPY package.json .

# Install dependencies
RUN npm install

RUN npm i -g serve

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port that the application runs on
EXPOSE 3000

# Command to run the application
CMD [ "serve", "-s", "dist" ]