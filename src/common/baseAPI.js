import axios from 'axios'
import { errorAlert } from '@/common/alert.js'
import { getToken } from '@/common/universalCookie'

/** @type {HttpErrorCode} */
const errorCode = {
  400: '請求錯誤，請檢查您的輸入',
  401: '未登入',
  403: '沒有權限',
  404: '請求錯誤，未找到該資源',
  500: '伺服器端出錯'
}

/**
 * Axios instance for making API requests.
 * @type {import('axios').AxiosInstance}
 */
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
})

/**
 * @typedef {import('axios').InternalAxiosRequestConfig} InternalAxiosRequestConfig
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 * @typedef {import('axios').AxiosError} AxiosError
 *
 */
const interceptors = {
  request: {
    /**
     * @param {InternalAxiosRequestConfig} config
     * @returns
     */
    then: (config) => {
      const token = getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    /**
     * @param {AxiosError} error
     */
    catch: (error) => {
      return Promise.reject(error)
    }
  },
  response: {
    /**
     * @param {AxiosResponse} res
     * @returns
     */
    then: (res) => {
      if (res.headers['content-type'] === 'application/json') {
        return Promise.resolve(res.data)
      }
      return Promise.resolve(res)
    },

    /**
     * @param {AxiosError} error
     */
    catch: (error) => {
      const { response } = error
      if (response) {
        errorAlert(errorCode?.[response.status] || '未知錯誤')
      }
      return Promise.reject(error)
    }
  }
}

baseAPI.interceptors.request.use(interceptors.request.then, interceptors.request.catch)

baseAPI.interceptors.response.use(interceptors.response.then, interceptors.response.catch)

/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 */

/**
 * @param {string} url
 * @param {Object} [params]
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const baseGet = (url, params, config) => {
  return baseAPI.get(url, { ...config, params })
}

/**
 * @param {string} url
 * @param {Object} data
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const basePost = (url, data, config) => {
  return baseAPI.post(url, data, config)
}

export { baseGet, basePost, interceptors }
