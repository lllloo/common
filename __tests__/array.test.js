import { hasDuplicates } from '@/common/array';

describe('hasDuplicates', () => {
  test('returns true if array has duplicates', () => {
    const arr = [1, 2, 3, 4, 5, 1];
    expect(hasDuplicates(arr)).toBe(true);
  });

  test('returns false if array has no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(hasDuplicates(arr)).toBe(false);
  });

  test('returns false if array is empty', () => {
    const arr = [];
    expect(hasDuplicates(arr)).toBe(false);
  });
});