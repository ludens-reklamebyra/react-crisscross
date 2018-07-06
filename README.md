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
  </tbody>
</table>
    
    
    direction?: 'row' | 'column';
    justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  item?: boolean;
  xs?: IGrid;
  sm?: IGrid;
  md?: IGrid;
  lg?: IGrid;
  xl?: IGrid;
  flex?: string;
  grow?: number;
  shrink?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
