# nestjs-nextjs

rendering nextjs with nestjs

used https://medium.com/javascript-in-plain-english/render-next-js-with-nestjs-did-i-just-made-next-js-better-aa294d8d2c67 for initial setup

### To do

- [x] get basic setup in place
- [x] fetch data from rest endpoint
- [x] add graphql to nest
- [x] add jake, add jake task to generate graphql types
- [x] add graphql to next & fetch data
- [ ] define apollo client once, instead of inside every page (see notes)
- [x] send mutations/queries from ui to api
- [x] use graphql fragments
- [x] add database (docker-compose, postgresql)
- [x] connect nest + db (typeorm)
- [ ] add docker
- [x] add storybook
- [x] add ui styles (tailwind css or styled components maybe ??)
- [ ] add ui unit testing
- [ ] add api unit testing
- [ ] add ui integration testing
- [ ] add api integration testing
- [ ] add e2e testing
- [ ] add auth
- [ ] use context in the ui

### Questions

- graphql playground `/playground` isn't rendering (next 404 is rendering instead). can we host playground somewhere besides `/` ?

### links for future stuff

https://dev.to/angad777/setting-up-apollo-graphql-in-next-js-with-server-side-rendering-45l5

https://techblog.yahoo.co.jp/entry/2020121530052952/

### notes

**Apollo Client**
I setup apollo client/provider in \_app.tsx to wrap the current page, so pages can use hooks to mutate data. As far as querying, the problem is that we want to
fire off queries during `getServerSideProps` on a page. We can't use hooks inside
`getServerSideProps`, and server side props are already fetched by the time
that \_app.tsx initializes the page (they are actually passed in as `pageProps`).
