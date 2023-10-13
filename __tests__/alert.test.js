import Swal from 'sweetalert2'
import { errorAlert } from '../src/common/alert.js';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}))

describe('errorAlert', () => {
  test('has alert', () => {
    errorAlert('test');
    expect(Swal.fire).toHaveBeenCalledWith('test');
  });
})