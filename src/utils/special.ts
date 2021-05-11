/*
 * @Author: D.Y
 * @Date: 2021-04-22 14:10:13
 * @LastEditTime: 2021-04-22 14:10:22
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/utils/special.ts
 * @Description:
 */
export const specialCharacter =
  "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'"

export const specialCharacterPattern = new RegExp(
  "[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]",
)

export const isIncludeSpecialCharacter = (characters: string) => {
  if (specialCharacterPattern.test(characters)) {
    return true
  }
  return false
}
