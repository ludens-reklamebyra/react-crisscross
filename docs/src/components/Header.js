import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import docsData from '../utils/docsData';

const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  background-color: ${props => props.theme.imperialBlue};
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`;

const Branding = styled(({ ...props }) => <NavLink {...props} />)`
  color: ${props => props.theme.lightGray};
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
`;

const StyledMenu = styled.ul`
  list-style: none;

  li {
    a {
      color: ${props => props.theme.lightGray};
      text-decoration: none;
      position: relative;
    }
  }
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Branding exact to="/">
          React-crisscross
        </Branding>
        <StyledMenu>
          <li>
            <NavLink to={`/docs/${docsData[0].slug}`}>Docs</NavLink>
          </li>
        </StyledMenu>
      </StyledHeader>
    );
  }
}
