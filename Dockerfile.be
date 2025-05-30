FROM oven/bun:1.1.0 as builder
WORKDIR /app

COPY bun.lockb package.json ./
COPY packages/be ./packages/be

RUN bun install
RUN bun run be:db-generate
RUN bun run be:db-migrate

FROM oven/bun:distroless
WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["bun", "packages/be/index.ts"]