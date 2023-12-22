import { hasDuplicates, arrayRange } from '@/common/array';

describe('hasDuplicates', () => {
  test('如果數組中有重複元素，返回 true', () => {
    const arr = [1, 2, 3, 4, 5, 1];
    expect(hasDuplicates(arr)).toBe(true);
  });

  test('如果數組中沒有重複元素，返回 false', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(hasDuplicates(arr)).toBe(false);
  });

  test('如果數組為空，返回 false', () => {
    const arr = [];
    expect(hasDuplicates(arr)).toBe(false);
  });
});



describe('arrayRange', () => {

  test('返回指定範圍和步長的數組', () => {
    const result = arrayRange(1, 10, 1);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('返回指定範圍和步長的數組', () => {
    const result = arrayRange(1, 10, 2);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  test('如果開始和結束相同，返回只有一個元素的數組', () => {
    const result = arrayRange(5, 5, 1);
    expect(result).toEqual([5]);
  });

  test('如果開始大於結束，返回空數組', () => {
    const result = arrayRange(10, 1, 1);
    expect(result).toEqual([]);
  });
});