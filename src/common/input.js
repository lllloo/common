/**
 * 在指定元素的 textarea 中插入指定的文字
 * @param {HTMLInputElement} element - 目標元素
 * @param {string} val - 要插入的文字
 */
export const pasteWord = (element, val) => {
  if (element?.type !== 'textarea') return
  const textarea = element

  const length = textarea.value.length
  const selectionStart = textarea.selectionStart || length
  const selectionEnd = textarea.selectionEnd || length
  var myPrefix = textarea.value.substring(0, selectionStart)
  var mySuffix = textarea.value.substring(selectionEnd)
  textarea.value = myPrefix + val + mySuffix
  // vue 須加上讓雙向綁定數據更新
  // textarea.dispatchEvent(new Event('input'))
  textarea.focus()
  textarea.setSelectionRange(selectionStart + val.length, selectionStart + val.length)
}
