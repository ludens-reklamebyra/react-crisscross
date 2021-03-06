import * as React from 'react';
import styled, { css } from 'styled-components';
import { gridCalc } from './utils';
import { LayoutInterface } from './Interfaces';

const StyledLayout = styled.div<LayoutInterface>`
  box-sizing: border-box;
  ${(props: LayoutInterface) =>
    props.container &&
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      ${props.inline &&
        css`
          display: inline-flex;
        `}
      ${props.xs &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.xs
        }px) {
          ${props.xs.direction &&
            css`
              flex-direction: ${props.xs.direction};
            `}
          ${props.xs.justify &&
            css`
              justify-content: ${props.xs.justify};
            `}
          ${props.xs.alignItems &&
            css`
              align-items: ${props.xs.alignItems};
            `}
          ${props.xs.alignContent &&
            css`
              align-content: ${props.xs.alignContent};
            `}
          ${props.xs.wrap &&
            css`
              flex-wrap: ${props.xs.wrap};
            `}
          ${props.xs.gap &&
            (props.xs.direction === 'column'
              ? css`
                  margin-top: -${props.xs.gap}px;
                  margin-bottom: -${props.xs.gap}px;
                  > * {
                    padding-top: ${props.xs.gap}px;
                    padding-bottom: ${props.xs.gap}px;
                  }
                `
              : css`
                  margin-left: -${props.xs.gap}px;
                  margin-right: -${props.xs.gap}px;
                  > * {
                    padding-left: ${props.xs.gap}px;
                    padding-right: ${props.xs.gap}px;
                  }
                `)};
        }`}
      ${props.sm &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.sm
        }px) {
          ${props.sm.direction &&
            css`
              flex-direction: ${props.sm.direction};
            `}
          ${props.sm.justify &&
            css`
              justify-content: ${props.sm.justify};
            `}
          ${props.sm.alignItems &&
            css`
              align-items: ${props.sm.alignItems};
            `}
          ${props.sm.alignContent &&
            css`
              align-content: ${props.sm.alignContent};
            `}
          ${props.sm.wrap &&
            css`
              flex-wrap: ${props.sm.wrap};
            `}
          ${props.sm.gap &&
            (props.sm.direction === 'column'
              ? css`
                  margin-top: -${props.sm.gap}px;
                  margin-bottom: -${props.sm.gap}px;
                  > * {
                    padding-top: ${props.sm.gap}px;
                    padding-bottom: ${props.sm.gap}px;
                  }
                `
              : css`
                  margin-left: -${props.sm.gap}px;
                  margin-right: -${props.sm.gap}px;
                  > * {
                    padding-left: ${props.sm.gap}px;
                    padding-right: ${props.sm.gap}px;
                  }
                `)};
        }`}
      ${props.md &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.md
        }px) {
          ${props.md.direction &&
            css`
              flex-direction: ${props.md.direction};
            `}
          ${props.md.justify &&
            css`
              justify-content: ${props.md.justify};
            `}
          ${props.md.alignItems &&
            css`
              align-items: ${props.md.alignItems};
            `}
          ${props.md.alignContent &&
            css`
              align-content: ${props.md.alignContent};
            `}
          ${props.md.wrap &&
            css`
              flex-wrap: ${props.md.wrap};
            `}
          ${props.md.gap &&
            (props.md.direction === 'column'
              ? css`
                  margin-top: -${props.md.gap}px;
                  margin-bottom: -${props.md.gap}px;
                  > * {
                    padding-top: ${props.md.gap}px;
                    padding-bottom: ${props.md.gap}px;
                  }
                `
              : css`
                  margin-left: -${props.md.gap}px;
                  margin-right: -${props.md.gap}px;
                  > * {
                    padding-left: ${props.md.gap}px;
                    padding-right: ${props.md.gap}px;
                  }
                `)};
        }`}
      ${props.lg &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.lg
        }px) {
          ${props.lg.direction &&
            css`
              flex-direction: ${props.lg.direction};
            `}
          ${props.lg.justify &&
            css`
              justify-content: ${props.lg.justify};
            `}
          ${props.lg.alignItems &&
            css`
              align-items: ${props.lg.alignItems};
            `}
          ${props.lg.alignContent &&
            css`
              align-content: ${props.lg.alignContent};
            `}
          ${props.lg.wrap &&
            css`
              flex-wrap: ${props.lg.wrap};
            `}
          ${props.lg.gap &&
            (props.lg.direction === 'column'
              ? css`
                  margin-top: -${props.lg.gap}px;
                  margin-bottom: -${props.lg.gap}px;
                  > * {
                    padding-top: ${props.lg.gap}px;
                    padding-bottom: ${props.lg.gap}px;
                  }
                `
              : css`
                  margin-left: -${props.lg.gap}px;
                  margin-right: -${props.lg.gap}px;
                  > * {
                    padding-left: ${props.lg.gap}px;
                    padding-right: ${props.lg.gap}px;
                  }
                `)};
        }`}
      ${props.xl &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.xl
        }px) {
          ${props.xl.direction &&
            css`
              flex-direction: ${props.xl.direction};
            `}
          ${props.xl.justify &&
            css`
              justify-content: ${props.xl.justify};
            `}
          ${props.xl.alignItems &&
            css`
              align-items: ${props.xl.alignItems};
            `}
          ${props.xl.alignContent &&
            css`
              align-content: ${props.xl.alignContent};
            `}
          ${props.xl.wrap &&
            css`
              flex-wrap: ${props.xl.wrap};
            `}
          ${props.xl.gap &&
            (props.xl.direction === 'column'
              ? css`
                  margin-top: -${props.xl.gap}px;
                  margin-bottom: -${props.xl.gap}px;
                  > * {
                    padding-top: ${props.xl.gap}px;
                    padding-bottom: ${props.xl.gap}px;
                  }
                `
              : css`
                  margin-left: -${props.xl.gap}px;
                  margin-right: -${props.xl.gap}px;
                  > * {
                    padding-left: ${props.xl.gap}px;
                    padding-right: ${props.xl.gap}px;
                  }
                `)};
        }`}
    `};
  ${(props: LayoutInterface) =>
    props.item &&
    css`
      order: 0;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      align-self: auto;
      ${props.xs &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.xs
        }px) {
          ${props.xs.basis &&
            css`
              flex-basis: ${gridCalc(props.settings.columns, props.xs.basis)}%;
            `}
          ${props.xs.grow &&
            css`
              flex-grow: ${props.xs.grow};
            `}
          ${props.xs.shrink &&
            css`
              flex-shrink: ${props.xs.shrink};
            `}
          ${props.xs.alignSelf &&
            css`
              align-self: ${props.xs.alignSelf};
            `}
          ${props.xs.order &&
            css`
              order: ${props.xs.order};
            `}
        }`}
      ${props.sm &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.sm
        }px) {
          ${props.sm.basis &&
            css`
              flex-basis: ${gridCalc(props.settings.columns, props.sm.basis)}%;
            `}
          ${props.sm.grow &&
            css`
              flex-grow: ${props.sm.grow};
            `}
          ${props.sm.shrink &&
            css`
              flex-shrink: ${props.sm.shrink};
            `}
          ${props.sm.alignSelf &&
            css`
              align-self: ${props.sm.alignSelf};
            `}
          ${props.sm.order &&
            css`
              order: ${props.sm.order};
            `}
        }`}
      ${props.md &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.md
        }px) {
          ${props.md.basis &&
            css`
              flex-basis: ${gridCalc(props.settings.columns, props.md.basis)}%;
            `}
          ${props.md.grow &&
            css`
              flex-grow: ${props.md.grow};
            `}
          ${props.md.shrink &&
            css`
              flex-shrink: ${props.md.shrink};
            `}
          ${props.md.alignSelf &&
            css`
              align-self: ${props.md.alignSelf};
            `}
          ${props.md.order &&
            css`
              order: ${props.md.order};
            `}
        }`}
      ${props.lg &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.lg
        }px) {
          ${props.lg.basis &&
            css`
              flex-basis: ${gridCalc(props.settings.columns, props.lg.basis)}%;
            `}
          ${props.lg.grow &&
            css`
              flex-grow: ${props.lg.grow};
            `}
          ${props.lg.shrink &&
            css`
              flex-shrink: ${props.lg.shrink};
            `}
          ${props.lg.alignSelf &&
            css`
              align-self: ${props.lg.alignSelf};
            `}
          ${props.lg.order &&
            css`
              order: ${props.lg.order};
            `}
        }`}
      ${props.xl &&
        css`@media only screen and (min-width: ${
          props.settings.mediaQueries.xl
        }px) {
          ${props.xl.basis &&
            css`
              flex-basis: ${gridCalc(props.settings.columns, props.xl.basis)}%;
            `}
          ${props.xl.grow &&
            css`
              flex-grow: ${props.xl.grow};
            `}
          ${props.xl.shrink &&
            css`
              flex-shrink: ${props.xl.shrink};
            `}
          ${props.xl.alignSelf &&
            css`
              align-self: ${props.xl.alignSelf};
            `}
          ${props.xl.order &&
            css`
              order: ${props.xl.order};
            `}
        }`}
    `};
`;

export default StyledLayout;
