import Big from 'big.js';

/**
 * Adds an array of numbers.
 * @param {number[]|number[][]} args - The array of numbers to add.
 * @returns {number} The sum of all the numbers in the array.
 */
export const add = (...args) => {
  const [first, ...rest] = args.flat();
  return rest.reduce((acc, val) => {
    return acc.plus(val)
  }, Big(first)).toNumber();
}

/**
 * Subtracts two numbers and returns the result.
 * @param {number[]|number[][]} args - An array containing two numbers to be subtracted.
 * @returns {number} The result of subtracting the second number from the first.
 */
export const sub = (...args) => {
  const [first, ...rest] = args.flat();
  return rest.reduce((acc, val) => {
    return acc.minus(val)
  }, Big(first)).toNumber();
}

/**
 * Multiplies an array of numbers.
 * @param {number[]|number[][]} args - The array of numbers to multiply.
 * @returns {number} The product of all the numbers in the array.
 */
export const mul = (...args) => {
  const [first, ...rest] = args.flat();
  return rest.reduce((acc, val) => {
    return acc.times(val)
  }, Big(first)).toNumber();
}

/**
 * Divides an array of numbers and returns the result.
 * @param {number[]|number[][]} args - The array of numbers to divide.
 * @returns {number} The result of dividing all the numbers in the array.
 */
export const div = (...args) => {
  const [first, ...rest] = args.flat();
  return rest.reduce((acc, val) => {
    return acc.div(val)
  }, Big(first)).toNumber();
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num - The number to round.
 * @param {number} [dp=2] - The number of decimal places to round to. Defaults to 2.
 * @returns {number} The rounded number.
 */
export const round = (num, dp = 2) => {
  return Big(num).round(dp).toNumber();
}