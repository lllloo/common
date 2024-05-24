import * as path from 'path'
import * as fs from 'fs'
import { http, HttpResponse } from 'msw'

const baseUrl = 'http://localhost'
export const handlers = [
  http.get(baseUrl + '/user', () => {
    return HttpResponse.json({ username: 'admin' })
  }),
  http.get(baseUrl + '/image', () => {
    const buffer = fs.readFileSync(path.resolve(__dirname, '../file/100.png'))
    return HttpResponse.arrayBuffer(buffer, {
      headers: {
        'Content-Type': 'image/png'
      }
    })
  }),
  // http.post(baseUrl + '/file', async ({ request }) => {
  //   const data = await request.formData()
  //   const file = data.get('file')

  //   if (!file) {
  //     return new HttpResponse('Missing document', { status: 400 })
  //   }

  //   if (!(file instanceof File)) {
  //     return new HttpResponse('Uploaded document is not a File', {
  //       status: 400,
  //     })
  //   }

  //   return HttpResponse.json({
  //     contents: await file.text(),
  //   })
  // }),
  // error
  http.get(baseUrl + '/hasToken', ({ request }) => {
    if (!request.headers.get('Authorization')) {
      return new HttpResponse(null, {
        status: 401
      })
    }
    return new HttpResponse('pass')
  }),
  http.get(baseUrl + '/*', () => new HttpResponse(null, { status: 404 }))
]
