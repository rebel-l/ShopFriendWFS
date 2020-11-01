# Builder
FROM node:15-slim AS webapp-builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

# Frontend Webserver
FROM nginx:1
WORKDIR /usr/share/nginx/html/
COPY --from=webapp-builder /usr/src/app/dist/ .
COPY container/etc/nginx/conf.d/default.conf /etc/nginx/conf.d
