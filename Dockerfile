# Stage 1: base — Node 22 Alpine
FROM node:22-alpine AS base
WORKDIR /app

# Stage 2: deps — install all dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Stage 3: builder — build the application
FROM deps AS builder
COPY . .
RUN npm run build

# Stage 4: production — lean runtime image (no source, no devDeps)
FROM node:22-alpine AS production
WORKDIR /app
COPY --from=builder /app/.output ./.output
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

# Stage 5: development — hot-reload via bind-mounted source volume
FROM deps AS development
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host"]
