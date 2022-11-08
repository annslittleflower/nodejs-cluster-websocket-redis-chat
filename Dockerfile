FROM node:14.16.1-alpine3.10

WORKDIR /usr/app

COPY package*.json ./

RUN npm i --only=prod

COPY . .

EXPOSE 3000

# CMD ["node", "src/index.js"]
# CMD ["sh", "-c", "node server.js ${some_env_var} ${environment}"]
CMD ["sh", "-c", "node src/server.js NODE_ENV=development"]
