import * as path from 'path'
import * as fs from 'fs'
import { http, HttpResponse } from 'msw'

const baseUrl = 'http://localhost'
export const handlers = [
  http.post(baseUrl + '/login', () => {
    return new HttpResponse(null, {
      status: 200
    })
  }),

  http.get(baseUrl + '/user', () => {
    return HttpResponse.json({ username: 'admin' })
  }),

  http.get(baseUrl + '/user2', () => {
    return new HttpResponse(null, {
      status: 404
    })
  }),

  http.get(baseUrl + '/image', () => {
    const imageBuffer = fs.readFileSync(path.resolve(__dirname, '../file/100.png'))
    return new HttpResponse(imageBuffer, {
      headers: {
        'Content-Length': imageBuffer.byteLength.toString(),
        'Content-Type': 'image/jpeg'
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
  })
]
