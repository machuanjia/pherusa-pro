/*
 * @Author: D.Y
 * @Date: 2021-06-16 09:30:07
 * @LastEditTime: 2021-06-28 10:05:47
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/Icon/index.tsx
 * @Description:
 */

import { ProConfigration } from '@/config';
import React, { Component } from 'react';

type Props = {
  className?: string;
  name?: string;
  type?: string;
};

export default class Icon extends Component<Props> {
  render() {
    const { className = '', name = '', type = '' } = this.props;
    const { icon } = ProConfigration.options;
    return (
      <i
        className={`${className} ${icon.font} ${icon.prefix}${name} icon-${type}`}
      ></i>
    );
  }
}
