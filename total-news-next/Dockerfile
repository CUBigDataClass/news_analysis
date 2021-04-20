# Install dependencies only when needed
FROM ubuntu:trusty AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /total-news-next
RUN yarn import
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM ubuntu:trusty AS builder
WORKDIR /total-news-next
COPY . .
COPY --from=deps /total-news-next/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM ubuntu:trusty AS runner
WORKDIR /total-news-next

ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /total-news-next/next.config.js ./
COPY --from=builder /total-news-next/public ./public
COPY --from=builder /total-news-next/.next ./.next
COPY --from=builder /total-news-next/node_modules ./node_modules
COPY --from=builder /total-news-next/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /total-news-next/.next
USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
RUN npx next telemetry disable

CMD ["yarn", "start"]
