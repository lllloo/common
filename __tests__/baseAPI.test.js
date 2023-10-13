import axios from "axios";
var FormData = require('form-data');
import * as path from 'path';
import * as fs from 'fs';

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

describe('axios download blob', () => {
  test('image', async () => {
    const res = await baseGet('/image');
    const blob = new Blob([res.data], { type: res.headers['content-type'] });

    expect(res.headers['content-type']).toEqual('image/jpeg')
  })
});

// 目msw的mock server不支持formData
// 先用spyOn
describe('axios post formData', () => {
  const res = { status: "ok" }
  const basePost = jest
    .spyOn(axios, "post")
    .mockResolvedValue(res)

  test('formData', async () => {
    var formData = new FormData();
    formData.append('id', '123');

    const imageBuffer = fs.readFileSync(
      path.resolve(__dirname, '../src/file/100.png'),
    )
    formData.append('file', imageBuffer);

    const res = await basePost('/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    expect(res.status).toEqual("ok")
  })
});
