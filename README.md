# time-manager

Dmitry Erokhin's FQW project.
The monorepo makes by `lerna`, and has `api` and `frontend` sections.

All project parts powered by `typescript`.

api stack:
-   fastify
-   mongoDB
-   jest

frontend stack:
-   react
-   react-router-dom
-   jest
-   ramda
-   effector

## Install

Global install of lerna is recomended.
```bash
$ npm i -g lerna
```
Install dependencies:
```bash
$ lerna bootstrap
```
Add new packages:
```bash
$ lerna add <package-name> --scope <app-scope> [--params]
```

## Run

Run frontend app in development mode:
```bash
$ cd ./frontend && npm run start:dev
```

Before API project start, run frontend build:
```bash
$ cd ./frontend && npm run build
```
Then run:
```bash
$ cd ../api && npm run build && npm run start
```

## Licence

MIT © Erokhin Dmitriy
