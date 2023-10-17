/**
 * 判斷是否為有效的 URL
 * @param {string} url - 要判斷的 URL 字串
 * @returns {boolean} - 回傳是否為有效的 URL
 */
export const isUrl = (url) => {
  try {
    return Boolean(new URL(url));
  }
  catch (e) {
    return false;
  }
}


/**
 * 從 URL 中取得搜尋參數的物件。
 * @param {string} url - 要解析的 URL 字串。
 * @returns {Object} 包含搜尋參數的物件。
 */
export const getSearchObj = (url) => {
  return Object.fromEntries(
    new URLSearchParams(url).entries(),
  );
};