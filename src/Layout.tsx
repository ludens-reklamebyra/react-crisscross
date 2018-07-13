import * as React from 'react';
import StyledLayout from './StyledLayout';
import { mergeDeep } from './utils';
import defaultSettings from './defaultSettings';
import { LayoutInterface, SettingsInterface } from './interfaces';
import LayoutContext from './LayoutContext';

function Layout(props: LayoutInterface): any {
  return (
    <LayoutContext.Consumer>
      {(settings: SettingsInterface) => {
        const mergedSettings = mergeDeep(defaultSettings, settings);

        return <StyledLayout settings={mergedSettings} {...props} />;
      }}
    </LayoutContext.Consumer>
  );
}

export default Layout;
