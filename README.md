# our-unique-store
1. Run ```bun install```
2. Run ```bun be:db-genarate```
3. Run ```bun be:db-migrate```
4. Run ```bun be:db-seed```
5. run ```bun dev```

Then you can access the application in http://localhost:5173

## Challanging part
There wasn’t any major challenge on the front-end side, but I did face some difficulties on the back-end. It was my first time using Hono (I usually work with Express), so I had to rely heavily on the documentation and also got some help from AI tools. Another challenge was dealing with the Router type from tRPC on the front end—it was showing as any at first. I had to troubleshoot by tweaking the tsconfig and adjusting the monorepo setup to get it working properly.

## Access online the development server
https://our-unique-store.info

## Docker compose
```docker compose up -d --build```