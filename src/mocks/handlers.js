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
  http.post(baseUrl + '/file', async ({ request }) => {
    try {
      const form = await request.formData()
      if (!form.get('file')) {
        throw new Error('no file')
      }
    } catch (error) {
      return new HttpResponse(null, {
        status: 400
      })
    }
    if (!request.headers.get('Content-Type')?.includes('multipart/form-data')) {
      return new HttpResponse(null, {
        status: 400
      })
    }
    return HttpResponse.json({ status: 'ok' })
  }),
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
