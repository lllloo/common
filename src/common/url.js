/**
 * 判斷是否為有效的 URL
 * @param {string} url - 要判斷的 URL 字串
 * @returns {boolean} - 回傳是否為有效的 URL
 */
export const isUrl = (url) => {
  try {
    return Boolean(new URL(url))
  } catch (e) {
    return false
  }
}

/**
 * 從 URL 中取得搜尋參數的物件。
 * @param {string} url - 要解析的 URL 字串。
 * @returns {Object} 包含搜尋參數的物件。
 * @example getParams(window.location.search)
 */
export const getParams = (url) => {
  return Object.fromEntries(new URLSearchParams(url).entries())
}

/**
 * 將物件轉換為 URL 查詢字串。
 * @param {{ [key: string]: string|number }} obj - 包含查詢參數的物件。
 * @returns {string} - URL 查詢字串。
 */
export const getParamsString = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

/**
 * 將字串中網址自動加上超連結 https 或 http 或 www 開頭的網址
 * @param {string} text - 要處理的字串
 * @returns {string} - 處理後的字串
 */
export const autoLink = (text) => {
  return text.replace(/(https?:\/\/\S+)|(www\.\S+)/g, (match) => {
    const url = match.startsWith('https')
      ? match
      : match.startsWith('http')
        ? match
        : `https://${match}`
    return `<a href="${url}" target="_blank">${match}</a>`
  })
}
