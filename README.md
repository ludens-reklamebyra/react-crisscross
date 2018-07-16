[![GitHub issues](https://img.shields.io/github/issues/ludens-reklamebyra/react-crisscross.svg)](https://github.com/ludens-reklamebyra/react-crisscross/issues) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![GitHub license](https://img.shields.io/github/license/ludens-reklamebyra/react-crisscross.svg)](https://github.com/ludens-reklamebyra/react-crisscross/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/ludens-reklamebyra/react-crisscross.svg?branch=master)](https://travis-ci.org/ludens-reklamebyra/react-crisscross)

<h1 align="center">React Crisscross :triangular_ruler:</h1>
<p align="center">A simple and flexible layout component for React based on CSS flexbox</p>

## Layout component

```jsx
<Layout container>
  <Layout item>{/* Content */}</Layout>
</Layout>
```

### Properties

You have accesss to all the same properties as in flexbox.

#### Container properties

| Property   | Value                                                                                     | Description                                        |
| ---------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| direction  | `'row'` _(default)_, `'column'`, `'row-reverse'`, `'column-reverse'`                      | Same as the `flex-direction` property in flexbox.  |
| justify    | `'flex-start'` _(default)_, `'flex-end'`, `'center'`, `'space-between'`, `'space-around'` | Same as the `justify-content` property in flexbox. |
| alignItems | `'stretch'` _(default)_, `'flex-start'`, `'flex-end'`, `'center'`, `'baseline'`           | Same as the `align-items` property in flexbox.     |
| wrap       | `'nowrap'` _(default)_, `'wrap'`, `'wrap-reverse'`                                        | Same as the `flex-wrap` property in flexbox.       |
| gap        | number                                                                                    | Size of gap between each flex item.                |

#### Item properties

| Property  | Value                                                                                     | Description                                            |
| --------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| flex      | string _(eg. '1 0 auto')_                                                                 | Same as the `flex` property in flexbox.                |
| grow      | number                                                                                    | Same as the `flex-grow` property in flexbox.           |
| shrink    | number                                                                                    | Same as the `flex-shrink` property in flexbox.         |
| alignSelf | `'auto'` _(default)_, `'flex-start'`, `'flex-end'`, `'center'`, `'baseline'`, `'stretch'` | Same as the `flex-grow` property in flexbox.           |
| xs        | 1-12                                                                                      | Sets the `flex-basis` propery on the `xs` media query. |
| sm        | 1-12                                                                                      | Sets the `flex-basis` propery on the `sm` media query. |
| md        | 1-12                                                                                      | Sets the `flex-basis` propery on the `md` media query. |
| lg        | 1-12                                                                                      | Sets the `flex-basis` propery on the `lg` media query. |
| xl        | 1-12                                                                                      | Sets the `flex-basis` propery on the `xl` media query. |

---

## Layout Provider

Sometimes you want to override the default settings for the layout, such as media queries. React Crisscross ships with a
module that can help you inject custom settings. Here's an example:

```jsx
const mySettings = {
  mediaQueries: {
    large: 1500
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

#### Default settings

These settings can be overwritten by the `LayoutProvider`.

```js
const settings = {
  mediaQueries: {
    xsmall: 0,
    small: 600,
    medium: 960,
    large: 1280,
    xlarge: 1920
  },
  columns: 12
};
```
