import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Main = styled.div`
  position: relative;
  top: 55px;
`;

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
        <Main>
          <h1>This is home page</h1>
        </Main>
      </div>
    );
  }
}
