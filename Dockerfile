FROM node:18-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN if [ -f package.json ]; then npm install; fi
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
