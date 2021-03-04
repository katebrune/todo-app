# Todo App

This is a todo app to manage daily tasks. The idea is to be able to open the app, add your tasks for the day, and at the end of the day all tasks are removed.

## About The Project

This project started as a proof-of-concept for server-side rendering [NextJS](https://nextjs.org/) with [NestJS](https://nestjs.com/). The basic implementation is in place, so moving forward the goal for this project is to add in "production" codebase features (authentication, testing, deploying), and new application features to see how well the setup holds up with more complicated scenarios.

## Roadmap

As I said above, the goal moving forward is to increase the complexity of the application and see how it holds up. In the issues tab, there are two milestones, 'production codebase features' + 'application features'. This is where i'm tracking the new features I want to add to the application. Suggestions always welcome.

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

5. Generate ormconfig

```bash
#/todo-app
jake db:config:generate
```

6. Run migrations

```bash
jake db:migration:run
```

7. Start application

```bash
#/todo-app
yarn start:dev
```
