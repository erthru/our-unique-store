FROM oven/bun:1.1.0 as builder    
WORKDIR /app

COPY bun.lock package.json ./
COPY packages ./packages

RUN bun install
RUN bun be:db-generate
RUN bun be:db-migrate
RUN bun run fe:build

FROM nginx:alpine
COPY --from=builder /app/packages/fe/dist /usr/share/nginx/html
COPY --from=builder /app/packages/fe/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

FROM oven/bun:distroless               
WORKDIR /app

COPY --from=builder /app/bun.lockb /app/package.json ./

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
CMD ["bun", "be:start"]