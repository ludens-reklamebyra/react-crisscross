import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Docs from './views/Docs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/docs" component={Docs} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
