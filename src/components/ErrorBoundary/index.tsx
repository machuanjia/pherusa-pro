/*
 * @Author: D.Y
 * @Date: 2021-06-16 09:30:07
 * @LastEditTime: 2021-06-28 10:10:45
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/ErrorBoundary/index.tsx
 * @Description:
 */

import React, { Component } from 'react';

import styles from './index.module.less';

type State = {
  hasError: boolean;
};

type Props = {
  children?: React.ReactNode;
  ErrorImgUrl?: string;
  className?: string;
};

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { ErrorImgUrl, children, className } = this.props;

    return hasError ? (
      <img
        className={`${styles['error-graph']} ${className}`}
        alt="errorImg"
        src={ErrorImgUrl}
      />
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
