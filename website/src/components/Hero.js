import React from 'react';
import styled from 'styled-components';
import LinkButton from './Button';

const StyledHero = styled.div`
  padding: 5rem 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: ${props => props.theme.dazzledBlue};
  flex-direction: column;
  color: ${props => props.theme.lightGray};

  h1 {
    font-size: 3rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.35rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

export default function Hero({ title, subtitle }) {
  return (
    <StyledHero>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <LinkButton transparent to="/docs">
        Docs
      </LinkButton>
    </StyledHero>
  );
}
