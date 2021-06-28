/*
 * @Author: D.Y
 * @Date: 2021-06-16 09:30:07
 * @LastEditTime: 2021-06-28 10:05:37
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/GlobalLoading/index.tsx
 * @Description:
 */

import React, { Component } from 'react';
import styles from './index.module.less';

type Props = {
  className?: string;
};

class GlobalLoading extends Component<Props> {
  render() {
    const { className = '' } = this.props;

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
    );
  }
}

export default GlobalLoading;
