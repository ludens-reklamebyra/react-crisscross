import { SettingsInterface } from './interfaces';

const defaultSettings: SettingsInterface = {
  mediaQueries: {
    xsmall: 0,
    small: 600,
    medium: 960,
    large: 1280,
    xlarge: 1920
  },
  gridBase: 12
};

export default defaultSettings;
