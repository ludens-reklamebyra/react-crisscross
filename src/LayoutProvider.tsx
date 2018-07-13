import * as React from 'react';
import { SettingsInterface } from './interfaces';
import LayoutContext from './LayoutContext';

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

export default LayoutProvider;
