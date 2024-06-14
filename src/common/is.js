/**
 * 檢查值是否為字串。
 *
 * @param {*} val - 要檢查的值。
 * @returns {boolean} 如果值是字串則返回 `true`，否則返回 `false`。
 */
export const isString = (val) => typeof val === 'string'

/**
 * 檢查值是否為數字。
 *
 * @param {*} val - 要檢查的值。
 * @returns {boolean} 如果值是數字則返回 `true`，否則返回 `false`。
 */
export const isNumber = (val) => {
  return !isNaN(parseFloat(val)) && isFinite(val)
}

/**
 * 檢查值是否為陣列。
 *
 * @param {*} value - 要檢查的值。
 * @returns {boolean} 如果值是陣列則返回 `true`，否則返回 `false`。
 */
export const isArray = Array.isArray

/**
 * 檢查值是否為物件。
 *
 * @param {*} val - 要檢查的值。
 * @returns {boolean} 如果值是物件則返回 `true`，否則返回 `false`。
 */
export const isObject = (val) => {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}
