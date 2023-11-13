import Cookies from 'universal-cookie'
import { getToken, setToken } from '@/common/cookie'

jest.mock('universal-cookie', () => jest.fn())
const mockCookieSet = jest.fn();
const mockCookieGet = jest.fn(() => 'testToken')
Cookies.prototype.set = mockCookieSet;
Cookies.prototype.get = mockCookieGet

describe('Cookie functions', () => {
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
