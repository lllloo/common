import { baseGet } from '@/common/baseAPI'
import { getDownloadFile, downloadBlob, downloadFile } from '@/common/ajax';

jest.mock('@/common/baseAPI', () => {
  return {
    baseGet: jest.fn().mockResolvedValue({ data: 'hello world', headers: { 'content-type': 'text/plain' } })
  }
})

describe('download', () => {

  it('downloads ajax', async () => {
    const mockDownloadBlob = jest.fn();
    await getDownloadFile(mockDownloadBlob)
    expect(baseGet).toHaveBeenCalled();
    expect(mockDownloadBlob).toHaveBeenCalled();
  });

  it('download blob', async () => {
    window.URL.createObjectURL = jest.fn();
    window.URL.revokeObjectURL = jest.fn();

    const blob = new Blob(['hello world'], { type: 'text/plain' });
    const mockDownloadFile = jest.fn();
    await downloadBlob(blob, mockDownloadFile);
    expect(window.URL.createObjectURL).toHaveBeenCalled();
    expect(window.URL.revokeObjectURL).toHaveBeenCalled();
    expect(mockDownloadFile).toHaveBeenCalled();
  });

  it('download file', async () => {
    const link = {
      click: jest.fn()
    };
    jest.spyOn(document, "createElement").mockImplementation(() => link);
    const url = 'http://localhost:8080';
    const name = 'file';
    downloadFile(url, name);
    expect(link.href).toBe(url);
    expect(link.download).toBe(name);
    expect(link.click).toHaveBeenCalled();
  });

});

