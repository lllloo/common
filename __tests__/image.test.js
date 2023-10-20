import { getImageInfo } from '@/common/image';

describe('getImageInfo', () => {
  test('取得圖片資訊', async () => {
    window.Image = class {
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 0);
      }
    }

    const imgSrc = 'src';
    const img = await getImageInfo(imgSrc);
    expect(img.src).toEqual(imgSrc);
  });

  test('取得圖片資訊 失敗', async () => {
    window.Image = class {
      constructor() {
        setTimeout(() => {
          this.onerror();
        }, 0);
      }
    }

    const imgSrc = 'error';
    try {
      const img = await getImageInfo(imgSrc);
    } catch (error) {
      expect(error.src).toEqual(imgSrc);
    }
  })

});