import { baseGet } from './baseAPI';

/**
 * 請求下載檔案
 * @param {*} fn 
 * @returns {Promise<void>}
 */
export const getDownloadFile = async (fn = downloadBlob) => {
  const res = await baseGet('/image', { responseType: 'blob' });
  const blob = new Blob([res.data], { type: res.headers['content-type'] });
  fn(blob)
}

/**
 * 下載Blob檔案
 * @param {Blob} blob
 * @returns {void}
 */
export const downloadBlob = (blob, fn = downloadFile) => {
  const url = window.URL.createObjectURL(blob);
  fn(url, 'file')
  window.URL.revokeObjectURL(url);
}

/**
 * 下載檔案
 * @param {string} url - 檔案的 URL
 * @param {string} name - 檔案名稱
 * @returns {void}
 */
export const downloadFile = (url, name) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
}