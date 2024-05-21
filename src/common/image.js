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

/**
 * base64 轉 Blob
 * @param {String} base64
 * @returns {Blob}
 */
export const base64ToBlob = (base64) => {
  var bytes = window.atob(base64.split(',')[1])
  var ab = new Uint8Array(bytes.length)
  for (var i = 0; i < bytes.length; i++) {
    ab[i] = bytes.charCodeAt(i)
  }
  return new Blob([ab], { type: 'image/png' })
}
