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
```
$ npm i -g lerna
```
Install dependencies:
```
$ lerna bootstrap
```
Add new packages:
```
$ lerna add <package-name> --scope <app-scope> [--params]
```
## Licence

MIT © Erokhin Dmitriy
