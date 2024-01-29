/**
 * 取得分頁列表
 * @param {Number} current 當前頁面
 * @param {Number} pageCount 總共幾頁
 * @param {Number} totalToDisplayPage 總共顯示幾頁
 */
export const getShowPageList = (current, pageCount, totalToDisplayPage) => {
  if (totalToDisplayPage >= pageCount) {
    return [...new Array(pageCount).fill(0).map((_, i) => i + 1)]
  }

  // 一邊顯示幾頁
  const sidePage = Math.floor(totalToDisplayPage / 2)
  let list = [
    ...new Array(sidePage)
      .fill(0)
      .map((_, i) => 0 - i)
      .reverse(),
    ...new Array(pageCount).fill(0).map((_, i) => i + 1),
    ...new Array(sidePage).fill(0).map((_, i) => pageCount + i + 1)
  ]

  const index = list.indexOf(current)
  if (totalToDisplayPage % 2 === 0) {
    list = list.slice(index - sidePage + 1, index + sidePage + 1)
  } else {
    list = list.slice(index - sidePage, index + sidePage + 1)
  }

  if (list[0] <= 0) {
    // 當前頁面小於等於 0 補到 1
    const shift = 1 - list[0]
    list = list.map((row) => row + shift)
  } else if (list[list.length - 1] >= pageCount) {
    // 當前頁面大於等於總頁數 減少到總頁數
    const shift = list[list.length - 1] - pageCount
    list = list.map((row) => row - shift)
  }

  return list
}
