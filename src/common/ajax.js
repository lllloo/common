import { baseGet } from './baseAPI.js';


// export const getDownloadFile = async () => {
//   const res = await baseGet('/image', { responseType: 'blob' });
//   const blob = new Blob([res.data], { type: res.headers['content-type'] });
//   downloadFile(blob)
// }


/**
 * Downloads a file from a Blob object.
 * @param {Blob} blob - The Blob object to download.
 * @returns {void} - A Promise that resolves when the download is complete.
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