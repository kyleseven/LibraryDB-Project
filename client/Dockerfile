FROM node:16-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

COPY . ./
ARG SERVER_HOST
RUN sed -i "s/localhost/$SERVER_HOST/g" package.json

CMD ["npm", "start"]
