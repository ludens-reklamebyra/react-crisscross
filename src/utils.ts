import { GridType } from './Interfaces';

export function gridCalc(base: number, size: GridType): number {
  if (size < 1 || size > base) {
    throw new Error(
      `The grid size is a number between 1-12. You defined "${size}".`
    );
  }

  return (size / base) * 100;
}
