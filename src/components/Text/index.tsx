/*
 * @Author: D.Y
 * @Date: 2021-07-21 09:46:48
 * @LastEditTime: 2021-08-03 11:10:35
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/Text/index.tsx
 * @Description: 文本组件
 *
 文本组件，规范系统文本使用
   <Text value="这个是测试文本"/>
   type属性:
   【default】: 默认黑色
   【info】: 说明文本
   【label】: 标题文本
   【empty】: 空文本
   【link】: 链接文本，默认为#687c8a ,使用图标加文本点击事件等
   【primaryLink】: 默认为主色，适用表格内操作等
   size属性：大小，默认14px
   isBold: 是否加粗
   disabled: 是否禁用
   icon: 使用有图标状态
   value: 传值, react 子组件优先 <Text>这个是测试文本</Text>
 */
import type {ReactNode} from 'react'
import React, { memo, useEffect, useState } from 'react'

import style from './index.module.less'

type Props = {
  className?: string
  type?: 'default' | 'info' | 'label' | 'empty' | 'link' | 'primaryLink'
  size?: number
  isBold?: boolean
  disabled?: boolean
  icon?: ReactNode | null
  children?: ReactNode
  value?: ReactNode
}

export const Text = memo(
  React.forwardRef(
    ({
      className = '',
      type = 'default',
      size,
      isBold,
      disabled,
      icon = null,
      children,
      value,
    }: Props) => {
      const [styles, setStyles] = useState<{
        fontSize?: number
      }>({})

      useEffect(() => {
        const temp = {}
        // @ts-ignore
        size && (temp.fontSize = size)
        setStyles(temp)
      }, [size])

      return (
        <span
          className={`${style['text-wrap']} ${style[`text-${type}`]} ${
            isBold ? style['text-bold'] : ''
          } ${disabled ? style['text-disabled'] : ''} ${icon ? style['text-icon'] : ''} ${
            icon && size === 12 ? style['text-icon-small'] : ''
          } ${className}`}
          style={styles}
        >
          {icon}
          {children || value}
        </span>
      )
    },
  ),
)
