# Web starter kit

Kick-start your new SPA based on Babel + Webpack and including minimal testing, code formatting and linter tools.

## Disclamer

I really don't want to create another framework specific huge and complicated boilerplate which is too much on the internet. It's more like a bunch of my favorite configs for rapid initialization of modern web app based on a framework and tools that you really want.

Also it doesn't include any tools for stylesheets because it's so project-specific part. Basically I prefer to use `styles-components` in React/Vue projects but for something small it's more easier to prepare css modules based on PostCSS and `postcss-preset-env`.

## Quick start

Clone application:

```bash
git clone git@github.com:maratfakhreev/web-starter-kit.git --origin web-starter-kit [MY-NEW-PROJECT]
cd [MY-NEW-PROJECT] && yarn install
```

### Available commands

```bash
yarn start # start the application with development environment and run webpack-dev-server
yarn build # build the application with production environment
yarn format # format code via prettier
yarn lint # lint code via eslint
yarn test # test code via jest
```
