FROM node:16 as build

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL="http://localhost:8080/api"

RUN npm test

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
