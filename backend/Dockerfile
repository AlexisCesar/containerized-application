FROM node:19-alpine

WORKDIR /app

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5555

CMD ["node", "server.js"]
