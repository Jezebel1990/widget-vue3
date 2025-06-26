FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:1.18.0-alpine AS final

ENV NODE_ENV=production

COPY --from=build /app/dist /usr/share/nginx/html