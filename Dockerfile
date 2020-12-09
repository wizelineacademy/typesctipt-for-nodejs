FROM node:lts-buster as builder
WORKDIR /app
COPY src /app/src
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
COPY .env /app/.env
RUN npm install && npm run build

FROM node:lts-buster-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env
ENTRYPOINT [ "npm", "run", "start" ]