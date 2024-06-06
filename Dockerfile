FROM node:18

WORKDIR /usr/app

COPY package.json .
COPY . .

RUN yarn

CMD [ "yarn", "start" ]

