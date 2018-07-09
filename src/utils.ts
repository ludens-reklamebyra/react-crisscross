import { GridType } from './Interfaces';

export const mediaQueries = {
  xsmall: 0,
  small: 600,
  medium: 960,
  large: 1280,
  xlarge: 1920
};

export function gridCalc(size: GridType): number {
  if (size < 1 || size > 12) {
    throw new Error(
      `The grid size is a number between 1-12. You defined "${size}".`
    );
  }

  return (size / 12) * 100;
}
