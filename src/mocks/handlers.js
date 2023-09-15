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
]