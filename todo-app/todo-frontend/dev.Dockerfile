FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_API_URL=http://localhost:3000/api

RUN npm install

CMD ["npm", "start"]