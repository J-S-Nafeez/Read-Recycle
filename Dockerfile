# ----- Stage 1: Build React Frontend -----
    FROM node:18-alpine AS build

    WORKDIR /app
    
    # Copy package.json and install dependencies
    COPY frontend/package.json frontend/package-lock.json ./
    RUN npm install
    
    # Copy the rest of the frontend code and build
    COPY frontend ./
    RUN npm run build
    
    # ----- Stage 2: Setup Backend -----
    FROM node:18-alpine
    
    WORKDIR /app
    
    # Copy backend package.json and install dependencies
    COPY backend/package.json backend/package-lock.json ./
    RUN npm install
    
    # Copy backend code
    COPY backend ./
    
    # Copy frontend build files to backend's public folder
    COPY --from=build /app/build ./public
    
    # Expose backend port
    EXPOSE 5000
    
    # Start the backend server
    CMD ["node", "Server.js"]
    