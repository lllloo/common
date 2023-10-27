/**
 * 判斷陣列中是否有重複的元素
 * @param {Array<any>} arr - 要檢查的陣列
 * @returns {boolean} - 如果陣列中有重複的元素，則返回 true，否則返回 false
 */
export const hasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length
}
