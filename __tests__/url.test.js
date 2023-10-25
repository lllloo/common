/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://localhost?a=1&b=2"}
 */

import { isUrl, getParams, setParams } from '@/common/url.js';


describe('isUrl', () => {
  test('returns true for valid URLs', () => {
    expect(isUrl('https://www.google.com')).toBe(true);
  });

  test('returns false for invalid URLs', () => {
    expect(isUrl('')).toBe(false);
    expect(isUrl('123')).toBe(false);
  });
});

describe('getSearchObj', () => {
  test('returns an object with search params', () => {
    // ?a=1&b=2
    const url = window.location.search
    const expected = {
      a: '1',
      b: '2',
    };
    expect(getParams(url)).toEqual(expected);
  });

  test('returns an empty object for URLs without search params', () => {
    const url = '';
    const expected = {};
    expect(getParams(url)).toEqual(expected);
  });
});


describe('params', () => {
  test('returns a string of URL parameters', () => {
    const obj = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const expected = 'name=John&age=30&city=New%20York';
    expect(setParams(obj)).toEqual(expected);
  });

  test('returns an empty string for an empty object', () => {
    const obj = {};
    const expected = '';
    expect(setParams(obj)).toEqual(expected);
  });
});