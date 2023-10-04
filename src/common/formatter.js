import { checkTWID } from "./validate.js";

/**
 * 只能輸入正整數
 * @param {String} value 數字
 * @returns {String} 取代後的數字
 */
export const formatterNumber = (value) => {
  value = value.replace(/[^\d]/g, '')
  return value !== '' ? Number(value).toString() : '';
};


/**
 * 只能輸入整數
 * @param {String} value 數字
 * @returns {String} 取代後的數字
 */
export const formatterSignNumber = (value) => {
  value = value.replace(/[A-Za-z]/g, '')
    .replace(/^-/, 'N')
    .replace(/[^\dN]/g, '')
    .replace('N', '-')
    .replace(/^(-)?0+(?=\d)/, '$1');
  if (value === '' || value === '-') return value;
  return value;
};


/**
 * 只能輸入小數點第二位
 * @param {String} value 數字
 * @returns {String} 取代後的數字
 */
export const formatterFloat = (value) => {
  var parts, partInteger, partDecimal = '', numeralDecimalScale = 2;
  value = value
    .replace(/[A-Za-z]/g, '')
    .replace('.', 'M')
    .replace('-', 'N')
    .replace(/[^\dMN]/g, '')
    .replace('M', '.')
    .replace('N', '-')
    .replace(/^(-)?0+(?=\d)/, '$1');


  if (value.indexOf('.') >= 0) {
    parts = value.split('.');
    partInteger = parts[0];
    partDecimal = '.' + parts[1].slice(0, numeralDecimalScale);
  } else {
    partInteger = value;
  }

  return partInteger + partDecimal;
};