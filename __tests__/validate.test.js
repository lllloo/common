import { checkTWID, checkUniformNumbers, checkPhoneNumber, checkEmail } from '@/common/validate.js';

describe('驗證身分證 checkTWID', () => {
  test('空字串 錯誤', () => {
    expect(checkTWID()).toBe(false);
  });
  test('型態 錯誤', () => {
    expect(checkTWID(null)).toBe(false);
    expect(checkTWID({})).toBe(false);
    expect(checkTWID(1234567891)).toBe(false);
  });
  test('字數 錯誤', () => {
    expect(checkTWID('A12345678')).toBe(false);
    expect(checkTWID('A1234567891')).toBe(false);
  });
  test('計算驗證 錯誤', () => {
    expect(checkTWID('A123456788')).toBe(false);
    expect(checkTWID('A123456790')).toBe(false);
  });
  test('正常', () => {
    expect(checkTWID('a123456789')).toBe(true);
    expect(checkTWID('A123456789')).toBe(true);
  });
});

describe('驗證手機號碼 checkPhoneNumber', () => {
  test('錯誤', () => {
    expect(checkPhoneNumber('ascaseqwds')).toBe(false);
    expect(checkPhoneNumber('098765432')).toBe(false);
  });

  test('正常', () => {
    expect(checkPhoneNumber('0987654321')).toBe(true);
  });
});

describe('驗證電子信箱 checkEmail', () => {
  test('錯誤', () => {
    expect(checkEmail('a @gmail.com')).toBe(false);
    expect(checkEmail('@gmail.com')).toBe(false);
  });

  test('正常', () => {
    expect(checkEmail('a@gmail.com')).toBe(true);
  });
});



describe('驗證身分證 checkUniformNumbers', () => {
  test('正常', () => {
    // 統一編號第7位數非
    expect(checkUniformNumbers('04595257')).toBe(true);
    expect(checkUniformNumbers('04595252')).toBe(true);
    // 統一編號第7位數為
    expect(checkUniformNumbers('10458575')).toBe(true);
    expect(checkUniformNumbers('10458574')).toBe(true);
    expect(checkUniformNumbers('10458570')).toBe(true);
    // error
    expect(checkUniformNumbers('10458571')).toBe(false);
    expect(checkUniformNumbers('10458572')).toBe(false);
    expect(checkUniformNumbers('10458573')).toBe(false);
  });

  test('錯誤', () => {
    expect(checkUniformNumbers('')).toBe(false);
    expect(checkUniformNumbers('10458571')).toBe(false);
    expect(checkUniformNumbers('10458572')).toBe(false);
    expect(checkUniformNumbers('10458573')).toBe(false);
    expect(checkUniformNumbers('10458576')).toBe(false);
    expect(checkUniformNumbers('10458577')).toBe(false);
    expect(checkUniformNumbers('10458578')).toBe(false);
  });
});

