FROM node:18-alpine
WORKDIR /app
COPY . ./
COPY package*.json ./
RUN npm i
CMD ["node","server.js"]