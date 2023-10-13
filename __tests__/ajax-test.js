import { downloadFile } from '../src/common/ajax';

describe('downloadFile', () => {
  it('downloads a file', async () => {
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

