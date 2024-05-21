import { getImageInfo, base64ToBlob } from '@/common/image';

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

describe('base64ToBlob', () => {
  test('base64 轉 Blob', () => {
    const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABKklEQVR42u2XsQ2CUBBFQ7eCJiQrDQFFB7'
    const blob = base64ToBlob(base64)
    expect(blob.type).toEqual('image/png')
  })
})
