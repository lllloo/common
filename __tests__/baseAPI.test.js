import { server } from '@/mocks/server.js'
import { baseGet, basePost } from '@/common/baseAPI.js';
import * as alertModule from '@/common/alert.js';
import * as cookieModule from '@/common/universalCookie';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('axios success', () => {
  test('allows user to log in', async () => {
    const res = await baseGet('/user');
    expect(res).toEqual({ username: 'admin' })
  })

});

describe('axios error', () => {
  const spyCookie = jest.spyOn(cookieModule, 'getToken').mockImplementation(() => 'testToken')
  const spyAlert = jest.spyOn(alertModule, 'errorAlert').mockImplementation(() => { })
  beforeEach(() => {
    jest.clearAllMocks()
  });
  test('401', async () => {
    try {
      const res = await baseGet('/hasToken');
    } catch (error) {
      expect(error.response.status).toEqual(401)
      expect(spyCookie).toHaveBeenCalled();
      expect(spyAlert).toHaveBeenCalled();
    }
  })

  test('404', async () => {
    try {
      const res = await baseGet('/notfound');
    } catch (error) {
      expect(error.response.status).toEqual(404)
      expect(spyAlert).toHaveBeenCalled();
    }
  })
});

describe('axios download blob', () => {
  test('image', async () => {
    const res = await baseGet('/image');
    const blob = new Blob([res.data], { type: res.headers['content-type'] });
    expect(res.headers['content-type']).toEqual('image/png')
    expect(blob).toBeInstanceOf(Blob)
  })
});


describe('axios post formData', () => {
  test('formData', async () => {
    var formData = new FormData();
    const file = new Blob(['Hello', 'world'], { type: 'text/plain' })
    formData.set('file', file, 'doc.txt')
    const res = await basePost('/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    expect(res.status).toEqual("ok")
  })
});
