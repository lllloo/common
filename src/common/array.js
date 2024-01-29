/**
 * 判斷陣列中是否有重複的元素
 * @param {Array<any>} arr - 要檢查的陣列
 * @returns {boolean} - 如果陣列中有重複的元素，則返回 true，否則返回 false
 */
export const hasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length
}

/**
 * 產生一個數字範圍的陣列。
 *
 * @param {number} start - 起始數字。
 * @param {number} stop - 結束數字。
 * @param {number} step - 遞增或遞減的步長。
 * @returns {number[]} - 由數字範圍組成的陣列。
 */
export const arrayRange = (start, stop, step = 1) => {
  return Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step)
}
