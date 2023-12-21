# ベースとなるイメージを指定
FROM node:14

# 作業ディレクトリを設定


# ENV MICROCMS_SERVICE_DOMAIN=04iqm4oaai MICROCMS_API_KEY=9HG3HOGq2gYmcHGTCZ3Q7dqRrOUAsBXuuWIE



FROM node:18.12-alpine

WORKDIR /app/

COPY ./package.json ./
RUN npm install