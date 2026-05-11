FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install typescript@5.4.5 --save-dev
COPY . .
RUN ./node_modules/.bin/tsc -p tsconfig.build.json --skipLibCheck

FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]
