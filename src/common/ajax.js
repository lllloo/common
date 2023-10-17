import { baseGet } from './baseAPI';

/**
 * 請求下載檔案
 * @param {*} fn 
 * @returns {Promise<void>}
 */
export const getDownloadFile = async (fn = downloadFile) => {
  const res = await baseGet('/image', { responseType: 'blob' });
  const blob = new Blob([res.data], { type: res.headers['content-type'] });
  fn(blob)
}

/**
 * 下載Blob檔案
 * @param {Blob} blob
 * @returns {void}
 */
export const downloadFile = (blob) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = 'file';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}