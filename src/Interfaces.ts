type DirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
type AlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';
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
  wrap?: WrapType;
  gap?: number;
  flex?: string;
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
