import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import docsData from '../utils/docsData';

const Nav = styled.nav`
  width: 250px;
  height: calc(100vh - 55px);
  top: 55px;
  left: 0;
  position: fixed;
  background: #f3f3f3;
`;

export default function DocsNav() {
  return (
    <Nav>
      <ul>
        {docsData.map((route, index) => {
          return (
            <li key={index}>
              <Link to={route.slug}>{route.label}</Link>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}
