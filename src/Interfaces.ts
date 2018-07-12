type GridType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface SettingsInterface {
  mediaQueries?: {
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    xlarge?: number;
  };
  gridBase?: number;
}

interface LayoutInterface {
  container?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  item?: boolean;
  xs?: GridType;
  sm?: GridType;
  md?: GridType;
  lg?: GridType;
  xl?: GridType;
  flex?: string;
  grow?: number;
  shrink?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  settings: SettingsInterface;
}

export { GridType, LayoutInterface, SettingsInterface };
