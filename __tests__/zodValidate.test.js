import { loginSchema } from '@/schema/schema.js'
import { validate } from '@/common/zodValidate.js'
describe('驗證 validate', () => {
  test('mobile 驗證成功', () => {
    const data = {
      mobile: '0987654321',
      password: '123456'
    }

    const result = validate(loginSchema, data)
    expect(result.success).toBe(true)
  })

  test('mobile 驗證失敗', () => {
    const data = {
      mobile: '',
      password: '123456'
    }
    const result = validate(loginSchema, data)
    expect(result.success).toBe(false)
    expect(result.error).toEqual(
      expect.objectContaining({
        mobile: expect.objectContaining({
          _errors: expect.arrayContaining(['必填'])
        })
      })
    )
  })
})

describe('個別驗證', () => {
  test('mobile 驗證成功', () => {
    const data = {
      mobile: '0987654321'
    }
    const mobile = loginSchema.shape.mobile
    const result = validate(mobile, data.mobile)
    expect(result.success).toBe(true)
  })

  test('mobile 驗證失敗', () => {
    const data = {
      mobile: ''
    }
    const mobile = loginSchema.shape.mobile
    const result = validate(mobile, data.mobile)
    expect(result.success).toBe(false)
    expect(result.error).toEqual(
      expect.objectContaining({
        _errors: expect.arrayContaining(['必填'])
      })
    )
  })
})
