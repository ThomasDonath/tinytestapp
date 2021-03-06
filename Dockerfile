FROM node:10.21

MAINTAINER td@thomasdonath.com

WORKDIR /app

ADD index.js ./
ADD package.json ./

RUN npm install

# TODO: multistage build

ENV APP_MESSAGE="Hello World from inside a container"

CMD ["npm", "start"]

EXPOSE 8080

HEALTHCHECK CMD curl --fail localhost:8080 || exit 1
