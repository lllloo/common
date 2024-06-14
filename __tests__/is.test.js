import { isString, isNumber, isArray, isObject } from "@/common/is";

describe('isString', () => {
  it('如果值是字符串，應該返回 true', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('123')).toBe(true);
    expect(isString('')).toBe(true);
  });

  it('如果值不是字符串，應該返回 false', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});

describe('isNumber', () => {
  it('如果值是數字，應該返回 true', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
    expect(isNumber('123')).toBe(true);
  });

  it('如果值不是數字，應該返回 false', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });
});

describe('isArray', () => {
  it('如果值是數組，應該返回 true', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('如果值不是數組，應該返回 false', () => {
    expect(isArray('hello')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
  });
});

describe('isObject', () => {
  it('如果值是對象，應該返回 true', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
  });

  it('如果值不是對象，應該返回 false', () => {
    expect(isObject('hello')).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject([])).toBe(false);
  });
});