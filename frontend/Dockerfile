FROM node:19-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN chown -R node:node ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
