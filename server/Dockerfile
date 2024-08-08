# Use the official Node.js image
FROM node:20-alpine3.17

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) first
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the server runs on
EXPOSE 8082

# Command to run the server
CMD [ "node", "server.js" ] 
