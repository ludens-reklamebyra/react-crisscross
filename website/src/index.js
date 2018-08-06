import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'prismjs';
import 'prismjs/themes/prism.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
