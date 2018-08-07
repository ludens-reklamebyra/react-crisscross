import React from 'react';
import Layout from '@ludens-reklame/react-crisscross';
import styled, { css } from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const StyledProvider = styled(LiveProvider)`
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 100px;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;

  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled(LiveEditor)`
  background: ${props => props.theme.lightGray};
  font-family: 'Source Code Pro', monospace;
  font-size: 1rem;
  height: 350px;
  overflow: scroll;
  ${column};
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 0.5rem;
  background: darkred;
  color: ${props => props.theme.lightGray};
`;

export default function LiveCode({ code, scope, noInline }) {
  return (
    <StyledProvider
      code={code}
      noInline={noInline}
      mountStylesheet={true}
      scope={{ Layout, ...scope }}
    >
      <LiveWrapper>
        <StyledEditor />
        <StyledPreview />
      </LiveWrapper>

      <StyledError />
    </StyledProvider>
  );
}
