import { checkTWID, checkPhoneNumber, checkEmail } from '../common/validate';
import Big from 'big.js';

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

