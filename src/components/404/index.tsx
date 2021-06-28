/*
 * @Author: D.Y
 * @Date: 2021-06-16 09:30:07
 * @LastEditTime: 2021-06-28 10:15:19
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/404/index.tsx
 * @Description:
 */
import React, { Component } from 'react';
import styles from './index.module.less';
// @ts-ignore
import imgURL from '../../assets/404.png';

type Props = {
  className: string;
  imgUrl: string;
};

export default class NoFond extends Component<Props, any> {
  render() {
    const { className, imgUrl = imgURL } = this.props;
    return (
      <div className={`${styles['nofond-wrap']} ${className || ''}`}>
        <img src={imgUrl} alt="404" />
      </div>
    );
  }
}
