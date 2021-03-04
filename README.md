# Todo App

This is a todo app to manage daily tasks. The idea is to be able to open the app, add your tasks for the day, and at the end of the day all tasks are removed.

## About The Project

This project started as a proof-of-concept for server-side rendering [NextJS](https://nextjs.org/) with [NestJS](https://nestjs.com/). The basic implementation is in place, so moving forward the goal for this project is to add in "production" codebase features (authentication, testing, deploying), and new application features to see how well the setup holds up with more complicated scenarios.

## Roadmap

- [x] get basic setup in place
- [x] fetch data from rest endpoint
- [x] add graphql to nest
- [x] add jake, add jake task to generate graphql types
- [x] add graphql to next & fetch data
- [ ] define apollo client once, instead of inside every page
- [x] send mutations/queries from ui to api
- [x] use graphql fragments
- [x] add database (docker-compose, postgresql)
- [x] connect nest + db (typeorm)
- [ ] add docker
- [x] add storybook
- [x] add ui styles (styled-components)
- [ ] add ui unit testing
- [ ] add api unit testing
- [ ] add ui integration testing
- [ ] add api integration testing
- [ ] add e2e testing
- [ ] add auth
- [ ] use context in the ui

## Usage

1. Clone the repo

```bash
git clone https://github.com/katebrune/todo-app.git
```

2. Install packages

```bash
#/todo-app
yarn install
```

3. Set up environment

```bash
#/todo-app
cp .env.example .env
```

4.  Start database

```bash
#/todo-app
docker-compose up
```

5. Run migrations

```bash
jake db:migration:run
```

6. Start application

```bash
#/todo-app
yarn start:dev
```
