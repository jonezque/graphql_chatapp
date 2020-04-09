############
#prod build#
############
FROM node:12-alpine as build
WORKDIR /app

COPY ./client/package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY ./client ./

RUN ng build --prod --aot
FROM node:12-alpine

COPY ./api ./
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
RUN apk del builds-deps
RUN npm install -g typescript
RUN tsc
COPY --from=build /app/dist /public

CMD ["node", "./build/app.js"]
