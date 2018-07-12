import * as React from 'react';
import styled, { css } from 'styled-components';
import { gridCalc } from './utils';
import { LayoutInterface, SettingsInterface } from './Interfaces';
import defaultSettings from './defaultSettings';

const LayoutContext = React.createContext(defaultSettings);

function LayoutProvider({
  settings,
  children
}: {
  settings: SettingsInterface;
  children: JSX.Element;
}): JSX.Element {
  if (!settings) {
    throw new Error(`The LayoutProvider is missing a 'settings'-prop.`);
  }

  return (
    <LayoutContext.Provider value={settings}>{children}</LayoutContext.Provider>
  );
}

const StyledLayout = styled.div<LayoutInterface>`
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
      ${props.xs &&
        `flex-basis: ${gridCalc(props.settings.gridBase, props.xs)}%;`}
      ${props.sm &&
        `@media only screen and (min-width: ${
          props.settings.mediaQueries.small
        }px) {
          flex-basis:  ${gridCalc(props.settings.gridBase, props.sm)}%;
        }`}
      ${props.md &&
        `@media only screen and (min-width: ${
          props.settings.mediaQueries.medium
        }px) {
          flex-basis:  ${gridCalc(props.settings.gridBase, props.md)}%;
        }`}
      ${props.lg &&
        `@media only screen and (min-width: ${
          props.settings.mediaQueries.large
        }px) {
          flex-basis:  ${gridCalc(props.settings.gridBase, props.lg)}%;
        }`}
      ${props.xl &&
        `@media only screen and (min-width: ${
          props.settings.mediaQueries.xlarge
        }px) {
          flex-basis:  ${gridCalc(props.settings.gridBase, props.xl)}%;
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

function Layout(props: LayoutInterface): any {
  return (
    <LayoutContext.Consumer>
      {(settings: SettingsInterface) => {
        const together = {
          ...defaultSettings,
          ...settings
        };

        console.log(together); // FUCK!!!

        return <StyledLayout settings={together} {...props} />;
      }}
    </LayoutContext.Consumer>
  );
}

export default Layout;
export { LayoutProvider };
