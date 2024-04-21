FROM node:20.10.0

RUN npm i -g @nestjs/cli

WORKDIR /api

WORKDIR /api
# ここから追加
COPY package*.json /api/ 

RUN npm i
CMD [ "npm", "run", "start:dev"]
#　ここまで追加
