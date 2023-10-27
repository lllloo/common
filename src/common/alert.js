import Swal from 'sweetalert2'
/**
 * 顯示錯誤訊息
 * @param {string} info
 */
export const errorAlert = (info) => {
  Swal.fire(info)
}
