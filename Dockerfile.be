FROM oven/bun:1.1.0 as builder
WORKDIR /app

COPY bun.lock package.json ./
COPY packages ./packages

RUN bun install
RUN bun run --cwd packages/be generate
RUN bun run --cwd packages/be migrate

FROM oven/bun:distroless
WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["bun", "packages/be/index.ts"]