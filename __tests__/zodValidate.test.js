import { loginSchema } from '@/schema/schema.js'
import { validate, validateField } from '@/common/zodValidate.js'

// 驗證
describe('驗證 loginSchema', () => {
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
