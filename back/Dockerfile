FROM node:12-alpine
WORKDIR /var/build
COPY ./package*.json ./

RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install
RUN apk del builds-deps
RUN	npm install -g typescript
COPY ./ ./
EXPOSE 3000