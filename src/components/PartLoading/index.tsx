/*
 * @Author: D.Y
 * @Date: 2021-04-22 17:18:03
 * @LastEditTime: 2021-06-28 10:06:09
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/PartLoading/index.tsx
 * @Description:
 */

import React, { Component } from 'react';
import styles from './index.module.less';

type Props = {
  className?: string;
};

export default class PartLoading extends Component<Props> {
  render() {
    const { className = '' } = this.props;
    return (
      <div className={`${className} ${styles['part-loading']}`}>
        <div className={styles.loader}></div>
      </div>
    );
  }
}
