import { baseAPI } from './baseAPI.js';

export const downloadFile = async () => {
    const res = await baseAPI.get('/image', { responseType: 'blob' });
    const blob = new Blob([res.data], { type: res.headers['content-type']});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
} 