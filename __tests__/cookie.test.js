import { getToken, setToken } from '@/common/cookie'

describe('Cookie functions', () => {
  it('should set token to cookies', () => {
    setToken('testToken')
    expect(document.cookie).toEqual('token=testToken')
  })

  it('should get token from cookies', () => {
    const token = getToken()
    expect(token).toBe('testToken')
  })
})
