FROM node:10-alpine

ENV NODE_ENV=production

ENV PORT=3000

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000 

CMD npm start