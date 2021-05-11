/*
 * @Author: D.Y
 * @Date: 2021-04-22 11:34:48
 * @LastEditTime: 2021-04-22 11:38:55
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/utils/dateFormat/index.ts
 * @Description:
 */
import moment from 'moment'

export const dateFormatFull = (date: number, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date || typeof date !== 'number') return ''
  return moment(date.toString().length === 10 ? date * 1000 : date).format(format)
}

export const dateFormatDay = (date: number, format = 'YYYY年MM月DD日') => {
  if (!date || typeof date !== 'number') return ''
  return moment(date.toString().length === 10 ? date * 1000 : date).format(format)
}
