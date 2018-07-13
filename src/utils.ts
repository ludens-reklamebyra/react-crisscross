import { GridType, SettingsInterface } from './interfaces';

export function gridCalc(base: number, size: GridType): number {
  if (size < 1 || size > base) {
    throw new Error(
      `The grid size is a number between 1-12. You defined "${size}".`
    );
  }

  return (size / base) * 100;
}

function isObject(item: object): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function mergeDeep(
  target: SettingsInterface,
  source: SettingsInterface
): SettingsInterface {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) (<any>Object).assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        (<any>Object).assign(target, { [key]: source[key] });
      }
    }
  }

  return target;
}
