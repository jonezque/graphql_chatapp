FROM node:12
WORKDIR /var/build
ENV NODE_PATH=/var/build/node_modules
ENV PATH=$PATH:/var/build/node_modules/.bin

COPY ./package*.json ./
RUN npm install

COPY ./ ./