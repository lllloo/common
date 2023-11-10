import { add, sub, mul, div, round } from '@/common/math';

describe('加法', () => {
  test('0.1 + 0.2  = 0.3', () => {
    // 0.30000000000000004
    expect(add(0.1, 0.2)).toBe(0.3);
    expect(add(0.1, 0.2, 0.3)).toBe(0.6);

    expect(add([0.1, 0.2])).toBe(0.3);
    expect(add([0.1, 0.2, 0.3])).toBe(0.6);

  });
})

describe('減法', () => {
  test('0.3 - 0.1 = 0.2', () => {
    // 0.19999999999999998
    expect(sub(0.3, 0.1)).toBe(0.2);
    expect(sub(0.3, 0.1, 0.1)).toBe(0.1);

    expect(sub([0.3, 0.1])).toBe(0.2);
    expect(sub([0.3, 0.1, 0.1])).toBe(0.1);
  });
})

describe('乘法', () => {
  test('0.6 * 3 = 1.8', () => {
    // 1.7999999999999998
    expect(mul(0.6, 3)).toBe(1.8);
    expect(mul(0.6, 3, 3)).toBe(5.4);

    expect(mul([0.6, 3])).toBe(1.8);
    expect(mul([0.6, 3, 3])).toBe(5.4);
  });
})

describe('除法', () => {
  test('0.3 / 3 = 0.1', () => {
    // 0.09999999999999999
    expect(div(0.3, 3)).toBe(0.1);
    expect(div(0.3, 3, 2)).toBe(0.05);

    expect(div([0.3, 3])).toBe(0.1);
    expect(div([0.3, 3, 2])).toBe(0.05);
  });
})

describe('四捨五入', () => {

  test('0.556', () => {
    expect(round(0.554)).toBe(0.55);
    expect(round(0.555)).toBe(0.56);
    expect(round(0.556)).toBe(0.56);
  });
  test('0.1 / 3 = 0.03', () => {
    expect(round(div(0.1, 3))).toBe(0.03);
    expect(round(0.033333333333)).toBe(0.03);
  });

  test('忽略小數點後的 0', () => {
    expect(round(1.00)).toBe(1);
  });
})