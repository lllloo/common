import { Schema } from 'yup';

/**
 * 驗證 整個物件
 * @param {Schema} schema 
 * @param {Object} data 
 * @returns {Promise<Object>} 
 */
export function validate(schema, data) {
  return schema
    .validate(data, { abortEarly: false })
    .catch((err) => new Promise((resolve, reject) => reject(err.inner)));
}

/**
 * 驗證 單個參數
 * @param {Schema} schema 
 * @param {Object} data 
 * @param {String} name
 * @returns {Promise<Object>}
 */
export function validateAt(schema, data, name) {
  return schema
    .validateAt(name, data)
}