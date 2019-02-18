# Web starter kit

Kick-start your new SPA including minimal building, testing, code formatting and linter tools.

### Development tools
- `Babel` as javascript compiler
- `Webpack/Wepback dev server` as module bundler and http server
- `Eslint/Prettier` as linting and formatting tools
- `Jest` as testing framework
- `Husky/Lint staged` as tools for preventing bad commits into repository

### Application tools
- `Axios` as library for http request. And I think that's all what you need :)

## Disclamer

I really don't want to create another complicated, huge and framework specific boilerplate we have too much on the internet. It's more like a bunch of my favorite configs for rapid initialization of modern web app based on a framework and tools that you really need.

Also it doesn't include any tools for stylesheets because this is too project specialized part. Basically I prefer using `styled-components` in React/Vue projects but for something small it's more easier to prepare css modules based on PostCSS and `postcss-preset-env` for example.

Below I provide instructions how to make a React or Vue boilerplate just in 3 minutes. Because I'm a fun of `jsx` and `styled-components` both boilerplates are based on these technologies.

## Quick start

Clone application:

```bash
git clone git@github.com:maratfakhreev/web-starter-kit.git --origin web-starter-kit [MY-NEW-PROJECT]
cd [MY-NEW-PROJECT] && yarn install
```

Available commands:

```bash
yarn start # start the application with development environment and run webpack-dev-server
yarn build # build the application with production environment
yarn format # format code via prettier
yarn lint # lint code via eslint
yarn test # test code via jest
```

## Setup minimal React based environment

1. Install additional dependencies.

```bash
  yarn add react react-dom react-router react-router-dom redux react-redux styled-components
  yarn add --dev @babel/preset-react eslint-plugin-react
```

2. Add `@babel/preset-react` to .babelrc.

```javascript
{
  "presets": [
    //...,
    "@babel/preset-react"
  ]
}
```

3. Add react recommended rules to .eslintrc.

```javascript
{
  "extends": [
    //...,
    "plugin:react/recommended"
  ],
}
```

4. Change wepback config entry point to `index.jsx` file.

```javascript
const appConfig = {
  //...,
  entry: [path.resolve('app', 'index.jsx')],
}
```

5. Use code like this in your `index.jsx` entry point.

```javascript
import React from 'react';
import { render } from 'react-dom';
import Application from 'components/Application'; // root component

render(<Application />, document.getElementById('app'));
```

6. If you want to set up test environment I'd suggest this [guide](https://medium.freecodecamp.org/how-to-set-up-jest-enzyme-like-a-boss-8455a2bc6d56)

## Setup minimal Vue based environment

You might find this idea a bit dumb to set up Vue with `jsx` and `styled-components` given that Vue goes better with "one file components" whereas the above-mentioned technics are commonly used in React. But I'm clearly convinced that soon more Vue projects will be using jsx as a template engine. Also I have a good experience using them in a complex Vue project and I'm pretty sure this approach may be of use. If you want to use Vue with common settings I can recommend this [guide](https://appdividend.com/2018/03/12/how-to-setup-vue-js-with-webpack-4-example/#Setup_Vue_js_With_Webpack_4).

1. Install additional dependencies.

```bash
  yarn add vue vue-router vuex vue-styled-components
  yarn add --dev @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props eslint-plugin-vue
```

2. Add `@vue/babel-preset-jsx` to .babelrc.

```javascript
{
  "presets": [
    //...,
    "@vue/babel-preset-jsx"
  ]
}
```

3. Add react recommended rules to .eslintrc.

```javascript
{
  "extends": [
    //...,
    "plugin:vue/recommended"
  ],
}
```

4. Change wepback config entry point to `index.jsx` file.

```javascript
const appConfig = {
  //...,
  entry: [path.resolve('app', 'index.jsx')],
}
```

5. Use code like this in your `index.jsx` entry point.

```javascript
import Vue from 'vue';
import Application from 'components/Application'; // root component

export default new Vue({
  el: '#app',
  render() {
    return <Application />;
  },
});
```
