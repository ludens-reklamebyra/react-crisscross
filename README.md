[![GitHub release](https://img.shields.io/github/release/ludens-reklamebyra/react-crisscross.svg)](https://github.com/ludens-reklamebyra/react-crisscross/releases/)
[![GitHub license](https://img.shields.io/github/license/ludens-reklamebyra/react-crisscross.svg)](https://github.com/ludens-reklamebyra/react-crisscross/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/ludens-reklamebyra/react-crisscross.svg?branch=master)](https://travis-ci.org/ludens-reklamebyra/react-crisscross)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![GitHub issues](https://img.shields.io/github/issues/ludens-reklamebyra/react-crisscross.svg)](https://github.com/ludens-reklamebyra/react-crisscross/issues)

<h1 align="center">React Crisscross :triangular_ruler:</h1>
<p align="center">A simple and flexible layout component for React based on CSS flexbox</p>

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)

* [Base properties](#base-properties)
* [Media queries](#media-queries)
* [Container properties](#container-properties)
* [Item properties](#item-properties)

- [Settings](#settings)

* [Layout Provider](#layout-provider)
* [Default settings](#default-settings)

- [Development](#development)

* [Install](#install)
* [Storybook](#storybook)
* [Unit tests](#unit-tests)
  - [Snapshots](#snapshots)
* [Formatting](#formatting)
* [Contributing](#contributing)

## Installation

<strong>With yarn</strong> </br>

`yarn add react-crisscross`

<strong>With npm</strong> </br>

`npm install react-crisscross`

---

## Usage

```jsx
import Layout from 'react-crisscross';

<Layout container>
  <Layout item>{/* Content */}</Layout>
</Layout>;
```

---

## Properties

You have accesss to all the same properties as in flexbox.

### Base properties

| Property  | Value   | Description                                                                        |
| --------- | ------- | ---------------------------------------------------------------------------------- |
| container | boolean | Makes the element a flex container, and allows all container properties to be used |
| item      | boolean | Makes the element a flex item, and allows all item properties to be used           |
| inline    | boolean | Make a flex container use `display: inline-flex`                                   |

### Media queries

| Property | Value  | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| xs       | object | Use container and/or item properties on the `xs` media query |
| sm       | object | Use container and/or item properties on the `sm` media query |
| md       | object | Use container and/or item properties on the `md` media query |
| lg       | object | Use container and/or item properties on the `lg` media query |
| xl       | object | Use container and/or item properties on the `xl` media query |

### Container properties

| Property   | Value                                                                                     | Description                                        |
| ---------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| direction  | `'row'` _(default)_, `'column'`, `'row-reverse'`, `'column-reverse'`                      | Same as the `flex-direction` property in flexbox.  |
| justify    | `'flex-start'` _(default)_, `'flex-end'`, `'center'`, `'space-between'`, `'space-around'` | Same as the `justify-content` property in flexbox. |
| alignItems | `'stretch'` _(default)_, `'flex-start'`, `'flex-end'`, `'center'`, `'baseline'`           | Same as the `align-items` property in flexbox.     |
| wrap       | `'nowrap'` _(default)_, `'wrap'`, `'wrap-reverse'`                                        | Same as the `flex-wrap` property in flexbox.       |
| gap        | number                                                                                    | Size of gap between each flex item.                |

### Item properties

| Property  | Value                                                                                     | Description                                    |
| --------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| flex      | string _(eg. '1 0 auto')_                                                                 | Same as the `flex` property in flexbox.        |
| grow      | number                                                                                    | Same as the `flex-grow` property in flexbox.   |
| shrink    | number                                                                                    | Same as the `flex-shrink` property in flexbox. |
| alignSelf | `'auto'` _(default)_, `'flex-start'`, `'flex-end'`, `'center'`, `'baseline'`, `'stretch'` | Same as the `flex-grow` property in flexbox.   |
| order     | number                                                                                    | Same as the `order` property in flexbox.       |

---

## Settings

Sometimes you want to override the default settings for the layout, such as media queries. React Crisscross ships with a module that can help you inject custom settings.

### Layout Provider

```jsx
import Layout, { LayoutProvider } from 'react-crisscross';

const mySettings = {
  mediaQueries: {
    lg: 1500
  }
}

<LayoutProvider settings={mySettings}>
  <Layout container>
    <Layout item>
      {/* Content */}
    </Layout>
  </Layout>
</LayoutProvider>
```

### Default settings

These settings can be overwritten by the `LayoutProvider`.

```js
const settings = {
  mediaQueries: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  columns: 12
};
```

---

## Development

Although all instructions for development in React Crisscross use [yarn](https://yarnpkg.com/lang/en/) as package manager, [npm](https://www.npmjs.com/) can also be used.

### Install

```
$ git clone git@github.com:ludens-reklamebyra/react-crisscross.git
$ cd react-crisscross
$ yarn
```

### Storybook

React crisscross uses storybook as a visual UI-test. To run the stories, use the command:

```
yarn storybook
```

### Unit tests

React crisscross is tested with snapshots using `Jest`.
Run the test suite using the command:

```
yarn test
```

To run test suite in watch mode use:

```
yarn test:watch
```

#### Snapshots

When you have to do breaking changes to React crisscross, the snapshots needs to be updated, or else they will fail the tests. You can do this by running the command:

```
yarn test:update-snapshots
```

### Formatting

Formatting is automatically done using `Prettier`. It runs a new formatting on every commit, using a pre-commit hook.

### Contributing

Have a look at our [contribution guidelines](./CONTRIBUTING.md).
