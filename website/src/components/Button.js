import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(({ light, transparent, ...props }) => (
  <Link {...props} />
))`
  font-size: 1rem;
  border: 0;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  border: 1px solid transparent;

  ${props =>
    props.light &&
    css`
      background-color: ${props.theme.lightGray};
      color: ${props.theme.imperialBlue};

      &:hover {
        background-color: transparent;
        border: 1px solid ${props.theme.lightGray};
        color: ${props.theme.lightGray};
      }
    `};

  ${props =>
    props.transparent &&
    css`
      background-color: transparent;
      border: 1px solid ${props.theme.lightGray};
      color: ${props.theme.lightGray};

      &:hover {
        background-color: ${props.theme.lightGray};
        color: ${props.theme.imperialBlue};
      }
    `};
`;

export default LinkButton;
