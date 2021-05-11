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
  className?: string
}

class GlobalLoading extends Component<Props> {
  render() {
    const { className = '' } = this.props

    return (
      <div className={`${className} ${styles['load-effect']}`}>
        <div className={styles['load-wrap']}>
          <span className={styles['load-wrap-item']}></span>
        </div>
        <div className={styles['load-wrap']}>
          <span className={styles['load-wrap-item']}></span>
        </div>
        <div className={styles['load-wrap']}>
          <span className={styles['load-wrap-item']}></span>
        </div>
        <div className={styles['load-wrap']}>
          <span className={styles['load-wrap-item']}></span>
        </div>
        <div className={styles['load-wrap']}>
          <span className={styles['load-wrap-item']}></span>
        </div>
      </div>
    )
  }
}

export default GlobalLoading
