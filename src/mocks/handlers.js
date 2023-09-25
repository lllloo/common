import * as path from 'path';
import * as fs from 'fs';
import { rest } from 'msw';


const baseUrl = 'http://localhost';
export const handlers = [

  rest.post(baseUrl + '/login', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get(baseUrl + '/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
  rest.get(baseUrl + '/user2', (req, res, ctx) => {
    return res(
      ctx.status(404)
    )
  }),
  rest.get(baseUrl + '/image', (_, res, ctx) => {
    const imageBuffer = fs.readFileSync(
      path.resolve(__dirname, '../file/100.png'),
    )
    return res(
      ctx.set('Content-Length', imageBuffer.byteLength.toString()),
      ctx.set('Content-Type', 'image/jpeg'),
      ctx.body(imageBuffer),
    )
  }),
  rest.post(baseUrl + '/file', (req, res, ctx) => {

    const body = req.body;
    if (typeof body !== 'object' || body === null) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'no body',
        })
      );
    }
    if (!req.headers.get('Content-Type')?.includes('multipart/form-data')) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'no multipart/form-data',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        status: 'ok',
      }),
    )
  }),
]