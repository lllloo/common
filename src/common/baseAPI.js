import axios from "axios";

// 
const baseAPI = axios.create({
    baseURL: '/',
    // 請求超時設定
    timeout: 10000, 
    // 跨域請求是否攜帶 cookie
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

const token = null;
baseAPI.interceptors.request.use(
    config => {
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const errorCode = {
    400: '請求錯誤',
    401: '未授權，請重新登入',
    403: '沒有權限',
    404: '請求錯誤,未找到該資源',
    500: '伺服器端出錯',
}

baseAPI.interceptors.response.use(
    res => Promise.resolve(res.data),
    error => {
        const { response } = error
        if (response) {
            console.error(errorCode?.[response.status] || '未知錯誤');
        }
        return Promise.reject(error)
    }
)

export { baseAPI }