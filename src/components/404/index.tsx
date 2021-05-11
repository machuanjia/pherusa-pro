/*
 * @Author: D.Y
 * @Date: 2021-04-22 17:18:03
 * @LastEditTime: 2021-04-22 17:26:00
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/components/404/index.tsx
 * @Description:
 */

import React, { Component } from 'react'
import styles from './index.module.less'

type Props = {
  className: string
  imgUrl: string
}

export default class NoFond extends Component<Props, any> {
  render() {
    const { className, imgUrl = 'https://cdn.wul.ai/official/img/404.png' } = this.props
    return (
      <div className={`${styles['nofond-wrap']} ${className || ''}`}>
        <img src={imgUrl} alt="404" />
      </div>
    )
  }
}
