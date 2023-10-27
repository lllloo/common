/**
 * 取得圖片資訊
 * @param {string} src - 圖片路徑
 * @returns {Promise<HTMLImageElement>} - 回傳 Promise 物件
 */
export const getImageInfo = (src) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(img)
    img.src = src
  })
}
