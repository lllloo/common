var FormData = require('form-data');
import { Blob } from 'buffer';

import { server } from '../src/mocks/server.js'
import { baseGet, basePost } from '../src/common/baseAPI.js';
import * as alertModule from '../src/common/alert.js';


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('axios success', () => {
    test('allows user to log in', async () => {
        const res = await baseGet('/user');
        expect(res).toEqual({ username: 'admin' })
    })

    test('allows user to log in', async () => {
        const res = await baseGet('/user');
        expect(res).toEqual({ username: 'admin' })
    })
});

describe('axios error', () => {
    test('404', async () => {
        const spy = jest.spyOn(alertModule, 'errorAlert').mockImplementation(() => { })
        try {
            const res = await baseGet('/user2');
        } catch (error) {
            expect(error.response.status).toEqual(404)
            expect(spy).toHaveBeenCalled();
        }
    })
});

describe('axios formData', () => {
    test('formData', async () => {
        var formData = new FormData();
        formData.append('id', '123');

        const res = await basePost('/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        expect(res.status).toEqual("ok")
    })
});

describe('axios formData', () => {
    test('formData2', async () => {
        const res = await baseGet('/image');
        const blob = new Blob([res.data], { type: res.headers['content-type'] });
        const url = window.URL.createObjectURL(blob);
        // console.log(url);
        // downloadFile(res)
        // console.log(res);
    })
});