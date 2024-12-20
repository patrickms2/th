FROM node:20.15.1-alpine AS builder
RUN apk add --no-cache git
WORKDIR /app
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --pure-lockfile
COPY frontend .
RUN yarn build

FROM node:20.15.1-alpine
WORKDIR /app
COPY backend/package.json backend/yarn.lock ./
RUN yarn install --pure-lockfile
COPY backend .

RUN yarn build

COPY --from=builder /app/build /app/public
CMD ["yarn", "start"]

