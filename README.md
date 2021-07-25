# time-manager

Dmitry Erokhin's FQW project.

The monorepo makes by `lerna`, and has `api` and `frontend` sections.

CI/CD powered by [Travis CI](https://www.travis-ci.com/)

The app has deployed on heroku: [open app](https://erokhin-time-manager.herokuapp.com/)

Project workflow is powered by JIRA.


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
## Licence

MIT © Erokhin Dmitriy
