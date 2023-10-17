import { getDownloadFile, downloadFile } from '@/common/ajax';

jest.mock('@/common/baseAPI', () => {
  return {
    baseGet: jest.fn().mockResolvedValue({ data: 'hello world', headers: { 'content-type': 'text/plain' } })
  }
})

describe('downloadFile', () => {

  it('downloads ajax', async () => {
    const mockDownloadFile = jest.fn();
    await getDownloadFile(mockDownloadFile)
    expect(mockDownloadFile).toHaveBeenCalled();
  });

  it('download file', async () => {
    window.URL.createObjectURL = jest.fn();
    window.URL.revokeObjectURL = jest.fn();
    document.body.removeChild = jest.fn();
    let link;
    jest.spyOn(document.body, "appendChild").mockImplementation((a) => {
      link = a
      link.click = jest.fn();
    });
    const blob = new Blob(['hello world'], { type: 'text/plain' });
    await downloadFile(blob);
    expect(window.URL.createObjectURL).toHaveBeenCalledWith(blob);
    expect(window.URL.revokeObjectURL).toHaveBeenCalled();
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.removeChild).toHaveBeenCalled();
    expect(link.click).toHaveBeenCalled();
  });
});

