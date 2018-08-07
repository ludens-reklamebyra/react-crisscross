import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Hero from '../components/Hero';
import LiveCode from '../components/LiveCode';
import { frontPageExample, Box } from '../utils/liveExamples';

const Main = styled.div`
  position: relative;
  top: 55px;
`;

const LiveCodeContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 1.5rem;
  margin: 2rem auto 0 auto;

  @media all and (max-width: 600px) {
    max-width: 100%;
  }
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
          <Hero
            title="React-crisscross"
            subtitle="A flexible layout component for React based on CSS flexbox"
          />
          <LiveCodeContainer>
            <LiveCode scope={{ styled, Box }} code={frontPageExample} />
          </LiveCodeContainer>
        </Main>
      </div>
    );
  }
}
