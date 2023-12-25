# ベースとなるイメージを指定
FROM node:14
FROM node:18.12-alpine

WORKDIR /app/

COPY ./package.json ./
RUN npm install