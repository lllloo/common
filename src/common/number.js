
/**
 * 千分位加逗點
 * @param {number|string} value 數字
 * @returns {number|string} 千分位加逗點
 */
export const toThousands = (value = "") => {
  if (value === null || value === undefined || value === "") return ''
  try {
    const formatValue = new Intl.NumberFormat('en').format(Number(value))
    return formatValue !== 'NaN' ? formatValue : value
  } catch (e) {
    return value
  }
}

