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

<h3>Properties</h3>
<p>You have accesss to all the same properties as in flexbox.</p>
<h4>Container values</h4>
<table>
  <thead>
    <tr>
      <td><b>Property</b></td>
      <td><b>Value</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>direction</td>
      <td>'row' <i>(default)</i>, 'column'</td>
    </tr>
    <tr>
      <td>justify</td>
      <td>'flex-start' <i>(default)</i>, 'flex-end', 'center', 'space-between', 'space-around'</td>
    </tr>
    <tr>
      <td>alignItems</td>
      <td>'stretch' <i>(default)</i>, 'flex-start', 'flex-end', 'center', 'baseline'</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>'nowrap' <i>(default)</i>, 'wrap', 'wrap-reverse'</td>
    </tr>
    <tr>
      <td>gap</td>
      <td>number</td>
    </tr>
    <tr>
      <td>xs</td>
      <td>1-12</td>
    </tr>
    <tr>
      <td>sm</td>
      <td>1-12</td>
    </tr>
    <tr>
      <td>md</td>
      <td>1-12</td>
    </tr>
    <tr>
      <td>lg</td>
      <td>1-12</td>
    </tr>
    <tr>
      <td>xl</td>
      <td>1-12</td>
    </tr>
  </tbody>
</table>

<h4>Item values</h4>
<table>
  <thead>
    <tr>
      <td><b>Property</b></td>
      <td><b>Value</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>flex</td>
      <td>string <i>(eg. '1 0 auto')</td>
    </tr>
    <tr>
      <td>grow</td>
      <td>number</td>
    </tr>
    <tr>
      <td>shrink</td>
      <td>number</td>
    </tr>
    <tr>
      <td>alignSelf</td>
      <td>'auto' <i>(default)</i>, 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'</td>
    </tr>
  </tbody>
</table>
