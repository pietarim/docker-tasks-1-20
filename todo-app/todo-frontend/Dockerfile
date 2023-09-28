FROM node:16 AS base
WORKDIR /usr/src/app

COPY . .
RUN npm ci

FROM base as test
RUN CI=true npm run test

FROM test as build
RUN npm run build

FROM nginx:1.20-alpine as prod

COPY --from=build /usr/src/app/build /usr/share/nginx/html

ENV REACT_APP_BACKEND_URL=http://localhost:3001