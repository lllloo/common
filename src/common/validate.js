/**
 * 驗證身分證號是否正確
 * @param {String} value 身分證號
 * @returns {Boolean} 是否正確
 */
export const checkTWID = (value) => {
  var regex = new RegExp(/^[A-Za-z][12]\d{8}$/)
  if (!regex.test(value)) return false

  const cityCode = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  const id = String(cityCode.indexOf(value[0].toUpperCase()) + 10) + value.slice(1)

  let weightsNum = 0
  for (let i = 0; i < weights.length; i++) {
    weightsNum += parseInt(id[i]) * weights[i]
  }
  return weightsNum % 10 == 0
}

/**
 * 驗證手機號碼
 * @param {String} value 身分證號
 * @returns {Boolean} 是否正確
 */
export const checkPhoneNumber = (value) => {
  return /^09\d{8}$/.test(value)
}

/**
 *  驗證電子郵件
 * @param {String} value 電子郵件
 * @returns {Boolean} 是否正確
 */
export const checkEmail = (value) => {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
}
