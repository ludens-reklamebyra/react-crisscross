type DirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';
type AlignContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';
type WrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
type AlignSelfType =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

type GridType = {
  direction?: DirectionType;
  justify?: JustifyType;
  alignItems?: AlignItemsType;
  alignContent?: AlignContentType;
  wrap?: WrapType;
  gap?: number;
  basis?: number;
  grow?: number;
  shrink?: number;
  alignSelf?: AlignSelfType;
  order?: number;
};

interface SettingsInterface {
  mediaQueries?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  columns?: number;
}

interface LayoutInterface {
  container?: boolean;
  item?: boolean;
  inline?: boolean;
  xs?: GridType;
  sm?: GridType;
  md?: GridType;
  lg?: GridType;
  xl?: GridType;
  settings: SettingsInterface;
}

export {
  DirectionType,
  JustifyType,
  AlignItemsType,
  WrapType,
  AlignSelfType,
  GridType,
  LayoutInterface,
  SettingsInterface
};
