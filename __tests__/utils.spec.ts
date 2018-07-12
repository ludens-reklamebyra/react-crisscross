import { gridCalc } from '../src/utils';

describe('Utils', () => {
  test('gridCalc to calculate correct percentage based on given size', () => {
    expect(gridCalc(12, 3)).toEqual(25);
    expect(gridCalc(12, 6)).toEqual(50);
    expect(gridCalc(12, 12)).toEqual(100);
  });

  test('gridCalc to throw when size is 0 or above 12', () => {
    expect(() => {
      gridCalc(12, 13);
    }).toThrow();
    expect(() => {
      gridCalc(12, 0);
    }).toThrow();
  });
});
