# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/index.html /usr/share/nginx/html/
COPY --from=build /app/about.html /usr/share/nginx/html/
COPY --from=build /app/auth.html /usr/share/nginx/html/
COPY --from=build /app/contact.html /usr/share/nginx/html/
COPY --from=build /app/detail.html /usr/share/nginx/html/
COPY --from=build /app/menu.html /usr/share/nginx/html/
COPY --from=build /app/assets /usr/share/nginx/html/assets

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
