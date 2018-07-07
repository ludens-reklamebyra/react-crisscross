[![GitHub issues](https://img.shields.io/github/issues/ludens-reklamebyra/react-womb.svg)](https://github.com/ludens-reklamebyra/react-womb/issues) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<h1 align="center">React Womb :dizzy:</h1>
<p align="center">A simple and flexible layout component for React based on CSS flexbox</p>

<h2>Layout component</h2>

```jsx
<Layout container>
  <Layout item>
    {/* Content */}
  </Layout>
</Layout>
```

### Properties
<p>You have accesss to all the same properties as in flexbox.</p>

#### Container values

| Property | Value | Description |
| --- | --- | --- |
| direction | `'row'` *(default)*, `'column'` | Same as the `flex-direction` property in flexbox. |
| justify | `'flex-start'` *(default)*, `'flex-end'`, `'center'`, `'space-between'`, `'space-around'` | Same as the `justify-content` property in flexbox. |
| alignItems | `'stretch'` *(default)*, `'flex-start'`, `'flex-end'`, `'center'`, `'baseline'` | Same as the `align-items` property in flexbox. |
| wrap | `'nowrap'` *(default)*, `'wrap'`, `'wrap-reverse'` | Same as the `flex-wrap` property in flexbox. |
| gap | number | Size of gap between each flex item. |

#### Item values

| Property | Value | Description |
| --- | --- | --- |
| flex | string *(eg. '1 0 auto')* | Same as the `flex` property in flexbox. |
| grow | number | Same as the `flex-grow` property in flexbox. |
| shrink | number | Same as the `flex-shrink` property in flexbox. |
| alignSelf | `'auto'` *(default)*, `'flex-start'`, `'flex-end'`, `'center'`, `'baseline'`, `'stretch'` | Same as the `flex-grow` property in flexbox. |
| xs | 1-12 | Sets the `flex-basis` propery on the `xs` media query. |
| sm | 1-12 | Sets the `flex-basis` propery on the `sm` media query. |
| md | 1-12 | Sets the `flex-basis` propery on the `md` media query. |
| lg | 1-12 | Sets the `flex-basis` propery on the `lg` media query. |
| xl | 1-12 | Sets the `flex-basis` propery on the `xl` media query. |
