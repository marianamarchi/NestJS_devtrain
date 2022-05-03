FROM node:14.15.4-alpine3.12

WORKDIR /home/node/app

RUN apk add --no-cache bash

COPY package.json .

RUN npm install

COPY . .

RUN npx typeorm migration:run

CMD ["npm", "run", "start:dev"]
