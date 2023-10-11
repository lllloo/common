import { errorAlert } from '../src/common/alert.js';

describe('errorAlert', () => {
  test('has console', () => {
    const consoleLogSPY = jest.spyOn(console, 'log').mockImplementation();
    errorAlert('test');
    expect(consoleLogSPY).toHaveBeenCalled();
    expect(consoleLogSPY).toHaveBeenCalledWith('test');
  });
})