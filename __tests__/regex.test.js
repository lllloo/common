import { getHtmlImg } from '@/common/regex.js';

const html = `
<div id="app">
  <img src="https://picsum.photos/1" />
  <h1>hello</h1>
  <p>world</p>
  <img src="https://picsum.photos/2" />
</div>   
`
describe('取得所有img', () => {
  test('正常', () => {
    var arr = getHtmlImg(html)
    expect(arr.length).toBe(2);
    expect(arr).toMatchInlineSnapshot(`
      [
        "https://picsum.photos/1",
        "https://picsum.photos/2",
      ]
    `);
  });
});