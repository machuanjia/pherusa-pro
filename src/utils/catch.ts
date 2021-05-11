/*
 * @Author: D.Y
 * @Date: 2021-04-22 14:09:33
 * @LastEditTime: 2021-04-22 14:40:32
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/utils/catch.ts
 * @Description:
 */
export const getItem = (key: string) => localStorage.getItem(key)
export const setItem = (key: string, value: string) => localStorage.setItem(key, value)
export const removeItem = (key: string) => localStorage.removeItem(key)
