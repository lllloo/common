/**
 * 取得所有的img的路徑
 * @param {String} html html
 * @returns {Array<String>}
 */
export const getHtmlImg = (html) => {
  const regex = /<img.*?src="(.*?)"/g;
  const arr = [];
  let match;
  while (match = regex.exec(html)) {
    arr.push(match[1])
  }
  return arr;
}