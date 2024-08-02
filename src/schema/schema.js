import { z } from 'zod'

/**
 * @type {z.ZodErrorMap}
 */
const customErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (ctx.defaultError === 'Required') {
      return { message: '必填' }
    }
    return { message: '型態錯誤' }
  }
  return { message: ctx.defaultError }
}
z.setErrorMap(customErrorMap)

export const loginSchema = z.object({
  mobile: z
    .string()
    .min(1, { message: '必填' })
    .regex(/^09\d{8}$/, { message: '請輸入正確的電話' }),
  password: z.string().min(1, { message: '必填' }).min(6, { message: '密碼至少6個字' })
})

// export const registerSchema = loginSchema
//   .merge(
//     z.object({
//       confirmPassword: z.string().min(1, { message: '必填' }).min(6, { message: '密碼至少6個字' }),
//       name: z.string().min(1, { message: '必填' }),
//       gender: z.enum(['M', 'F', 'O']).nullish(),
//       code: z.string().nullish(),
//       interest: z.array(z.string()).min(1, { message: '至少一個' }).default([])
//     })
//   )
//   .refine(
//     ({ confirmPassword, password }) => {
//       return confirmPassword === password
//     },
//     {
//       path: ['confirmPassword'],
//       message: '兩次密碼輸入不一致'
//     }
//   )
