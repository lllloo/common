import { formatterNumber, formatterFloat } from '../src/common/formatter';

describe('只能輸入正數字', () => {
    test('空字串', () => {
        expect(formatterNumber('')).toBe('');
    });
    test('開頭不能為0', () => {
        expect(formatterNumber('001')).toBe('1');
    });
    test('不能輸入小數點', () => {
        expect(formatterNumber('123.')).toBe('123');
    });
    test('不會有負號', () => {
        expect(formatterNumber('-001')).toBe('1');
    });
});

describe('只能輸入到小數點第二位', () => {
    test('空字串', () => {
        expect(formatterFloat('')).toBe('');
    });
    test('開頭不能為0', () => {
        expect(formatterFloat('00100')).toBe('100');
    });
    test('只能輸入到小數點第二位', () => {
        expect(formatterFloat('123.')).toBe('123.');
        expect(formatterFloat('123.2')).toBe('123.2');
        expect(formatterFloat('123.2212')).toBe('123.22');
    });
    test('只有負號才能有-', () => {
        expect(formatterFloat('-')).toBe('-');
        expect(formatterFloat('-01')).toBe('-1');
        expect(formatterFloat('-01-1')).toBe('-11');
    });
});


