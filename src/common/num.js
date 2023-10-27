import Big from 'big.js'

/**
 * 扁平化陣列
 * @param {number[]|number[][]} args
 * @returns {number[]}
 */
const flat = (args) => {
  /** @type {number[]} */
  const array = []
  return array.concat(...args)
}

/**
 *  加法
 * @param {number[]|number[][]} args - 可傳數字或數字陣列
 * @returns {number} 總和
 */
export const add = (...args) => {
  const [first, ...rest] = flat(args)
  return rest
    .reduce((acc, val) => {
      return acc.plus(val)
    }, Big(first))
    .toNumber()
}

/**
 * 減法
 * @param {number[]|number[][]} args - 可傳數字或數字陣列
 * @returns {number} 剩餘
 */
export const sub = (...args) => {
  const [first, ...rest] = flat(args)
  return rest
    .reduce((acc, val) => {
      return acc.minus(val)
    }, Big(first))
    .toNumber()
}

/**
 * 乘法
 * @param {number[]|number[][]} args - 可傳數字或數字陣列
 * @returns {number} 總和
 */
export const mul = (...args) => {
  const [first, ...rest] = flat(args)
  return rest
    .reduce((acc, val) => {
      return acc.times(val)
    }, Big(first))
    .toNumber()
}

/**
 * 除法
 * @param {number[]|number[][]} args - 可傳數字或數字陣列
 * @returns {number} 剩餘
 */
export const div = (...args) => {
  const [first, ...rest] = flat(args)
  return rest
    .reduce((acc, val) => {
      return acc.div(val)
    }, Big(first))
    .toNumber()
}

/**
 * 四捨五入
 * @param {number} num - 數字
 * @param {number} [dp=2] - 要四捨五入到小數點後幾位
 * @returns {number}
 */
export const round = (num, dp = 2) => {
  return Big(num).round(dp).toNumber()
}
