import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
dayjs.extend(isBetween)

// /**
//  * 驗證兩個時間區間是否重疊
//  * @param {Array<string>} timeA
//  * @param {Array<string>} timeB
//  * @returns {boolean}
//  */
// export const dayIsBetween = (timeA, timeB) => {
//   const format = 'HH:mm'
//   const start1 = dayjs(timeA[0], format).toDate().getTime()
//   const end1 = dayjs(timeA[1], format).toDate().getTime()
//   const start2 = dayjs(timeB[0], format).toDate().getTime()
//   const end2 = dayjs(timeB[1], format).toDate().getTime()
//   return start1 < end2 && end1 > start2
// }

/**
 * 驗證兩個時間區間是否重疊
 * @param {Array<string>} timeA
 * @param {Array<string>} timeB
 * @returns {boolean}
 */
export const dayIsBetween = (timeA, timeB) => {
  const format = 'HH:mm'
  const start1 = dayjs(timeA[0], format)
  const end1 = dayjs(timeA[1], format)
  const start2 = dayjs(timeB[0], format)
  const end2 = dayjs(timeB[1], format)
  return (
    (start1.isSame(start2) && end1.isSame(end2)) ||
    start1.isBetween(start2, end2, 'hour', '()') ||
    end1.isBetween(start2, end2, 'hour', '()') ||
    start2.isBetween(start1, end1, 'hour', '()') ||
    end2.isBetween(start1, end1, 'hour', '()')
  )
}
