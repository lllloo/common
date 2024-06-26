import { baseGet, basePost, interceptors } from '@/common/baseAPI.js';
import mockAxios from 'axios'
import * as alertModule from '@/common/alert.js';
import * as cookieModule from '@/common/universalCookie';

describe('axios success', () => {
  test('baseGet', async () => {
    const data = { username: 'admin' }
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data))
    const res = await baseGet('/user');
    expect(res).toEqual(data)
  })

  test('basePost', async () => {
    const data = { username: 'admin' }
    mockAxios.post.mockImplementationOnce(() => Promise.resolve(data))
    const res = await basePost('/user');
    expect(res).toEqual(data)
  })
});

describe('axios error', () => {
  test('baseGet 401', async () => {
    mockAxios.get.mockRejectedValue({ response: { status: 401 } });
    try {
      const res = await baseGet('/hasToken');
    } catch (error) {
      expect(error.response.status).toEqual(401)
    }
  })

  test('basePost 401', async () => {
    mockAxios.post.mockRejectedValue({ response: { status: 401 } });
    try {
      const res = await basePost('/hasToken');
    } catch (error) {
      expect(error.response.status).toEqual(401)
    }
  })

});


describe('interceptors', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });
  test('request then', async () => {
    const config = {
      headers: {
        Authorization: jest.fn()
      }
    }
    const spyCookie = jest.spyOn(cookieModule, 'getToken').mockImplementation(() => 'testToken')
    interceptors.request.then(config)
    expect(spyCookie).toHaveBeenCalled();
    expect(config.headers.Authorization).toBe('Bearer testToken')
  })

  test('request catch', async () => {
    const reject = jest.spyOn(Promise, 'reject').mockImplementation(() => { })
    try {
      await interceptors.request.catch('error')
    } catch (err) {
      expect(reject).toHaveBeenCalled();
    }
  })

  test('response then json', async () => {
    const data = {
      headers: {
        'content-type': 'application/json'
      },
      data: 'testData'
    }
    const res = await interceptors.response.then(data)
    expect(res).toEqual('testData')
  })

  test('response then not json', async () => {
    const data = {
      headers: {
        'content-type': 'multipart/form-data'
      },
      data: 'testData'
    }
    const res = await interceptors.response.then(data)
    expect(res).toEqual(data)
  })

  test('response catch', async () => {
    const error = {
      response: {
        status: 400
      }
    }
    const spyAlert = jest.spyOn(alertModule, 'errorAlert')
    const reject = jest.spyOn(Promise, 'reject')
    try {
      await interceptors.response.catch(error)
    } catch (err) {
      expect(spyAlert).toHaveBeenCalled();
      expect(reject).toHaveBeenCalled();
    }
  })
});
