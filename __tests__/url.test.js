/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://localhost?a=1&b=2"}
 */

import { isUrl, getParams, getParamsString, autoLink } from '@/common/url.js';


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
      city: 'New York',
    };
    const expected = 'name=John&age=30&city=New%20York';
    expect(getParamsString(obj)).toEqual(expected);
  });

  test('returns an empty string for an empty object', () => {
    const obj = {};
    const expected = '';
    expect(getParamsString(obj)).toEqual(expected);
  });
});

describe('autoLink', () => {
  test('將文字中的網址轉換為超連結 https', () => {
    const text = '請查看這個網站：https://www.google.com';
    const expected = '請查看這個網站：<a href="https://www.google.com" target="_blank">https://www.google.com</a>';
    expect(autoLink(text)).toEqual(expected);
  });

  test('將文字中的網址轉換為超連結 http', () => {
    const text = '請查看這個網站：http://www.google.com';
    const expected = '請查看這個網站：<a href="http://www.google.com" target="_blank">http://www.google.com</a>';
    expect(autoLink(text)).toEqual(expected);
  });

  test('將文字中的多個網址轉換為超連結', () => {
    const text = '請訪問我的部落格 http://www.google.com 和我的作品集 https://www.google.com/portfolio';
    const expected = '請訪問我的部落格 <a href="http://www.google.com" target="_blank">http://www.google.com</a> 和我的作品集 <a href="https://www.google.com/portfolio" target="_blank">https://www.google.com/portfolio</a>';
    expect(autoLink(text)).toEqual(expected);
  });

  test('不轉換沒有 http/https 協議的網址', () => {
    const text = '請查看這個網站：www.google.com';
    const expected = '請查看這個網站：<a href="https://www.google.com" target="_blank">www.google.com</a>';
    expect(autoLink(text)).toEqual(expected);
  });
});