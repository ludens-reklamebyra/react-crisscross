import { gridCalc, mergeDeep } from '../src/utils';

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

  test('mergeDeep to recursively merge objects', () => {
    const defaults = {
      mediaQueries: {
        xsmall: 0,
        small: 600,
        medium: 960,
        large: 1024,
        xlarge: 1417
      },
      columns: 12
    };

    const custom = {
      mediaQueries: {
        large: 1000
      },
      columns: 16
    };

    const expected = {
      mediaQueries: {
        xsmall: 0,
        small: 600,
        medium: 960,
        large: 1000,
        xlarge: 1417
      },
      columns: 16
    };
    expect(mergeDeep(defaults, custom)).toEqual(expected);
  });
});
