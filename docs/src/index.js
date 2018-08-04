import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

Prism.highlightAll();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
