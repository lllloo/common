import { server } from '../src/mocks/server.js'
import { baseAPI } from '../src/common/baseAPI.js';
import * as alertModule  from '../src/common/alert.js';


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('axios success', () => {
    test('allows user to log in', async () => {
        const res = await baseAPI.get('/user');
        expect(res).toEqual({ username: 'admin' })
    })

    test('allows user to log in', async () => {
        const res = await baseAPI.get('/user');
        expect(res).toEqual({ username: 'admin' })
    })
});

describe('axios error', () => {
    test('404', async () => {
        const spy = jest.spyOn(alertModule, 'errorAlert');
        try {
            const res = await baseAPI.get('/user2');
        } catch (error) {
            expect(error.response.status).toEqual(404)
            expect(spy).toHaveBeenCalled();
        }
    })
});
