import { toThousands, padStart, getRandom } from '@/common/number';

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

  it('Intl.NumberFormat 不支援', () => {
    const origin = Intl.NumberFormat
    Intl.NumberFormat = undefined
    expect(toThousands('1000')).toBe('1000');
    Intl.NumberFormat = origin
  });
})

describe('padStart', () => {
  it('應該在字串前面填充指定的字符', () => {
    expect(padStart('', 4)).toBe('0000');
    expect(padStart('123', 4)).toBe('0123');
    expect(padStart('01', 4)).toBe('0001');
  });

  it('padStart 不支援', () => {
    const origin = String.prototype.padStart
    String.prototype.padStart = undefined
    expect(padStart('123', 4)).toBe('123');
    String.prototype.padStart = origin
  })
});

describe('getRandom', () => {
  it('應該回傳在指定範圍內的隨機整數', () => {
    const result = getRandom(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('應該在最小值和最大值相等時回傳最小值', () => {
    const result = getRandom(5, 5);
    expect(result).toBe(5);
  });

  it('應該處理負數', () => {
    const result = getRandom(-10, -1);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-1);
  });

  it('應該處理浮點數', () => {
    const result = getRandom(1.5, 5.5);
    expect(result).toBeGreaterThanOrEqual(1.2);
    expect(result).toBeLessThanOrEqual(5.5);
  });
});