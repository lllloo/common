import Cookies from 'universal-cookie'

import { getToken, setToken, cookie } from '@/common/cookie'

jest.mock('universal-cookie', () => jest.fn())


jest.mock('universal-cookie');
const mockCookieSet = jest.fn();
const mockCookieGet = jest.fn(() => 'testToken')
Cookies.prototype.set = mockCookieSet;
Cookies.prototype.get = mockCookieGet

describe('Cookie functions', () => {
  // afterEach(() => {
  //   jest.clearAllMocks()
  // })

  it('should set token to cookies', () => {
    setToken('testToken')
    expect(mockCookieSet).toBeCalled()
  })

  it('should get token from cookies', () => {
    const token = getToken()
    expect(token).toBe('testToken')
    expect(mockCookieGet).toBeCalled()
  })
})
