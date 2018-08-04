import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  padding: 5rem 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: ${props => props.theme.cadetblue};
  flex-direction: column;
  color: ${props => props.theme.lightGray};

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.35rem;
    margin-top: 0;
  }
`;

export default function Hero({ title, subtitle }) {
  return (
    <StyledHero>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </StyledHero>
  );
}
