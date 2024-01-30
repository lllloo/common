import { toThousands } from '@/common/number';

describe('toThousands', () => {
  it('應該回傳帶有千分位分隔符的字串', () => {
    expect(toThousands(1000)).toBe('1,000');
    expect(toThousands(1000000)).toBe('1,000,000');
    expect(toThousands(123456789)).toBe('123,456,789');
  });

  it('應該處理負數', () => {
    expect(toThousands(-1000)).toBe('-1,000');
    expect(toThousands(-1000000)).toBe('-1,000,000');
    expect(toThousands(-123456789)).toBe('-123,456,789');
  });

  it('應該處理小數', () => {
    expect(toThousands(1234.56)).toBe('1,234.56');
    expect(toThousands(1234567.89)).toBe('1,234,567.89');
  });

  it('應該處理零和空值輸入', () => {
    expect(toThousands(0)).toBe('0');
    expect(toThousands()).toBe('');
    expect(toThousands(undefined)).toBe('');
    expect(toThousands(null)).toBe('');
    expect(toThousands('')).toBe('');
  });
});