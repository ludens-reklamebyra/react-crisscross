import * as React from 'react';
import styled, { css } from 'styled-components';
import MediaQueries from './MediaQueries';
import { LayoutInterface } from './Interfaces';

const Layout = styled.div<LayoutInterface>`
  ${(props: LayoutInterface) =>
    props.container &&
    css`
      display: flex;
      flex-direction: ${props.direction || 'row'};
      justify-content: ${props.justify || 'flex-start'};
      align-items: ${props.alignItems || 'stretch'};
      flex-wrap: ${props.wrap || 'nowrap'};
      ${props.gap &&
        (props.direction === 'column'
          ? css`
              margin-top: -${props.gap}px;
              margin-bottom: -${props.gap}px;
              > * {
                padding-top: ${props.gap}px;
                padding-bottom: ${props.gap}px;
              }
            `
          : css`
              margin-left: -${props.gap}px;
              margin-right: -${props.gap}px;
              > * {
                padding-left: ${props.gap}px;
                padding-right: ${props.gap}px;
              }
            `)};
    `};
  ${(props: LayoutInterface) =>
    props.item &&
    css`
      ${props.xs && `flex-basis: ${(props.xs / 12) * 100}%;`}
      ${props.sm &&
        `@media only screen and (min-width: ${MediaQueries.small}px) {
          flex-basis:  ${(props.sm / 12) * 100}%;
        }`}
      ${props.md &&
        `@media only screen and (min-width: ${MediaQueries.medium}px) {
          flex-basis:  ${(props.md / 12) * 100}%;
        }`}
      ${props.lg &&
        `@media only screen and (min-width: ${MediaQueries.large}px) {
          flex-basis:  ${(props.lg / 12) * 100}%;
        }`}
      ${props.xl &&
        `@media only screen and (min-width: ${MediaQueries.xlarge}px) {
          flex-basis:  ${(props.xl / 12) * 100}%;
        }`}

      ${props.flex &&
        css`
          flex: ${props.flex || '1 1 auto'};
        `};
      ${props.grow &&
        css`
          flex-grow: ${props.grow || 0};
        `};
      ${props.shrink &&
        css`
          flex-shrink: ${props.shrink || 1};
        `};
      box-sizing: border-box;
      align-self: ${props.alignSelf || 'auto'};
    `};
`;

export default Layout;
