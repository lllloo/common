import { server } from '../src/mocks/server.js'
import  { baseAPI }  from '../src/common/baseAPI.js';

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())


describe('axios success', () => {
    test('allows user to log in', async () => {
        const res = await baseAPI.get('/user');
       expect(res).toEqual({ username: 'admin' })
   })
});

describe('axios error', () => {
    test('allows user to log in', async () => {
        try {
            const res = await baseAPI.get('/user2');
        }catch(e) {
            expect(e.response.status).toEqual(404)
        }
   })
});
