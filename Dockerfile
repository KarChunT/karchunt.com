### BASE ENVIRONMENT
FROM node:21.6.2-alpine AS base

# Only install dependencies when needed
FROM base AS deps

WORKDIR /app

COPY package*.json ./

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat \
    && npm ci


### RUNNER ENVIRONMENT
FROM base AS runner

WORKDIR /app
ENV PORT=3000

# Create a non-root user
# RUN addgroup --system --gid 1001 nodejs \
#     && adduser --system --uid 1001 nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# USER nextjs

EXPOSE ${PORT}

CMD npm run dev
