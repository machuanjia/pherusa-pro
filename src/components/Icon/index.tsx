/*
 * @Author: D.Y
 * @Date: 2021-04-25 19:10:09
 * @LastEditTime: 2021-04-26 15:22:22
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/components/Icon/index.tsx
 * @Description:
 */

import { ProConfigration } from '@/config'
import React, { Component } from 'react'

type Props = {
  className?: string
  name?: string
  type?: string
}

export default class Icon extends Component<Props> {
  render() {
    const { className = '', name = '', type = '' } = this.props
    const { icon } = ProConfigration.options
    return <i className={`${className} ${icon.font} ${icon.prefix}${name} icon-${type}`}></i>
  }
}
