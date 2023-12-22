import { getShowPageList } from '@/common/pagination';

describe('getShowPageList', () => {
  test('顯示正確的頁數 開頭', () => {
    const result = getShowPageList(1, 10, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('顯示正確的頁數 中間', () => {
    const result = getShowPageList(4, 10, 5);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });

  test('顯示正確的頁數 結尾', () => {
    const result = getShowPageList(10, 10, 5);
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });
});