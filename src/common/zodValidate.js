import { z } from 'zod'

/**
 * @template T
 * @typedef  {{success: false, error: z.ZodFormattedError<T>}} SafeParseError
 */

/**
 * Zod 驗證
 * @param {z.ZodObject<z.ZodRawShape>} schema 驗證的 schema object
 * @param {any} data 驗證的物件
 * @returns {z.SafeParseSuccess<any> | SafeParseError<any>}
 */
export const validate = (schema, data) => {
  const result = schema.safeParse(data)
  return result.success
    ? result
    : {
        success: false,
        error: result.error.format()
      }
}

/**
 * Zod 個別驗證
 * @param {z.ZodObject<z.ZodRawShape>} schema  驗證的 schema object
 * @param {string} key 驗證的 key
 * @param {any} data 驗證的 value
 * @returns {z.SafeParseSuccess<any> | SafeParseError<any>}
 */
export const validateField = (schema, key, data) => {
  const result = schema.shape[key].safeParse(data)
  return result.success
    ? result
    : {
        success: false,
        error: result.error.format()
      }
}
