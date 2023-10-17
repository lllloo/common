import { formatterNumber, formatterSignNumber, formatterFloat } from '@/common/formatter.js';


/**
 * 一個一個輸入
 * @param {String} str 
 * @param {*} fn 
 * @returns {String}
 */
function oneByOneEnter(str, fn) {
  var value = ''
  str.split('').forEach((item) => {
    value = fn(`${value}${item}`)
  })
  return value
}

describe('只能輸入正數字', () => {

  /**
   * @param {string} value 
   * @returns {string}
   */
  const mockFormatterNumber = (value) => {
    return oneByOneEnter(value, formatterNumber)
  }

  test('空字串', () => {
    expect(mockFormatterNumber('')).toBe('');
  });
  test('開頭不能為0', () => {
    expect(mockFormatterNumber('001')).toBe('1');
  });
  test('不能輸入小數點', () => {
    expect(mockFormatterNumber('123.')).toBe('123');
  });
  test('不會有負號', () => {
    expect(mockFormatterNumber('-001')).toBe('1');
  });
});

describe('只能輸入負號跟數字', () => {

  /**
   * @param {string} value 
   * @returns {string}
   */
  const mockFormatterSignNumber = (value) => {
    return oneByOneEnter(value, formatterSignNumber)
  }

  test('空字串', () => {
    expect(mockFormatterSignNumber('')).toBe('');
  });
  test('開頭不能為0', () => {
    expect(mockFormatterSignNumber('001')).toBe('1');
  });
  test('不能輸入小數點', () => {
    expect(mockFormatterSignNumber('123.')).toBe('123');
  });
  test('負號', () => {
    expect(mockFormatterSignNumber('-')).toBe('-');
    expect(mockFormatterSignNumber('-0')).toBe('-0');
    expect(mockFormatterSignNumber('-0001')).toBe('-1');
    expect(mockFormatterSignNumber('-1021')).toBe('-1021');
  });
});

describe('只能輸入到小數點第二位', () => {

  /**
   * @param {string} value
   * @returns {string}
   */
  const mockFormatterFloat = (value) => {
    return oneByOneEnter(value, formatterFloat)
  }

  test('空字串', () => {
    expect(mockFormatterFloat('')).toBe('');
  });
  test('開頭不能為0', () => {
    expect(mockFormatterFloat('00100')).toBe('100');
  });
  test('只能輸入到小數點第二位', () => {
    expect(mockFormatterFloat('123.2212')).toBe('123.22');
  });
  test('只有負號才能有-', () => {
    expect(mockFormatterFloat('-01-1')).toBe('-11');
  });
});


