import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="title" content="React-crisscross" />
          <meta property="og:title" content="React-crisscross" />
          <meta name="description" content="Description of react-crisscross" />
          <meta
            property="og:description"
            content="Description of react-crisscross"
          />
        </Helmet>
        <h1>This is home page</h1>
      </div>
    );
  }
}
