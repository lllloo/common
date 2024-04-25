/**
 * 取得所有的img的路徑
 * @param {String} html html
 * @returns {Array<String>}
 */
export const getHtmlImg = (html) => {
  const regex = /<img.*?src="(.*?)"/g
  const arr = []
  let match
  while ((match = regex.exec(html))) {
    arr.push(match[1])
  }
  return arr
}

/**
 * 驗證是否只有中文
 * @param {String} str
 * @returns {Boolean}
 */
export const checkChinese = (str) => {
  try {
    const regex = /^\p{Unified_Ideograph}+$/u
    return regex.test(str)
  } catch (error) {
    const regex = /^[\u4E00-\u9FFF]+$/
    return regex.test(str)
  }
}
