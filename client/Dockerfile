FROM node:12-alpine
WORKDIR /var/build
COPY ./package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY ./ ./
EXPOSE 4200
