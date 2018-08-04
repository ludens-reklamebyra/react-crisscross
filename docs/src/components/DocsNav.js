import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import docsData from '../utils/docsData';

const Nav = styled.nav`
  width: 250px;
  height: calc(100vh - 55px);
  top: 55px;
  left: 0;
  position: fixed;
  background: ${props => props.theme.lightGray};

  ul {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0 0 0;

    li {
      &:last-child {
        a {
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
`;

const StyledNavLink = styled(({ active, ...props }) => <NavLink {...props} />)`
  font-size: 1.125rem;
  text-decoration: none;
  color: ${props => props.theme.seablue};
  padding: 0.5rem 1.5rem;
  display: block;
  position: relative;
  border-top: 1px solid #eee;

  ${props =>
    props.active &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5px;
        background: ${props.theme.seablue};
      }
    `};
`;

export default function DocsNav({ history }) {
  return (
    <Nav>
      <ul>
        {docsData.map((route, index) => {
          const isActive = history.location.pathname.includes(route.slug);
          return (
            <li key={index}>
              <StyledNavLink
                activeClassName="active"
                exact
                active={isActive}
                to={route.slug}
              >
                {route.label}
              </StyledNavLink>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}
