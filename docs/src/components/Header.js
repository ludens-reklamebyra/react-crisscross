import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  background-color: #222;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  a {
    color: #fff;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Link to="/">React crisscross</Link>
      </StyledHeader>
    );
  }
}
