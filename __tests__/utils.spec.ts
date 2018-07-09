import { gridCalc } from '../src/utils';

describe('Utils', () => {
  test('gridCalc to calculate correct percentage based on given size', () => {
    expect(gridCalc(3)).toEqual(25);
    expect(gridCalc(6)).toEqual(50);
    expect(gridCalc(12)).toEqual(100);
  });

  test('gridCalc to throw when size is 0 or above 12', () => {
    expect(() => {
      gridCalc(13);
    }).toThrow();
    expect(() => {
      gridCalc(0);
    }).toThrow();
  });
});
