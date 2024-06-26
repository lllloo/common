/**
 * 千分位加逗點
 * @param {number|string} value 數字
 * @returns {number|string} 千分位加逗點
 */
export const toThousands = (value = '') => {
  if (!value && value !== 0) return ''
  try {
    const formatValue = new Intl.NumberFormat('en').format(Number(value))
    return formatValue !== 'NaN' ? formatValue : value
  } catch (e) {
    return value
  }
}

/**
 * 數字補零
 * @param {number|string} value 數字
 * @param {number} length 長度
 * @param {string} padString 補零字串
 * @returns {number|string}
 */
export const padStart = (value, length, padString = '0') => {
  try {
    return String(value).padStart(length, padString)
  } catch (e) {
    return value
  }
}

/**
 * 生成指定範圍內的隨機整數
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} - 隨機整數
 */
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
