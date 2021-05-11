/*
 * @Author: D.Y
 * @Date: 2021-01-07 10:05:34
 * @LastEditTime: 2021-02-04 14:46:37
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/components/ErrorBoundary/index.tsx
 * @Description: 渲染错误边界组件
 */

import React, { Component } from 'react'

import styles from './index.module.less'

type State = {
  hasError: boolean
}

type Props = {
  children?: React.ReactNode
  ErrorImgUrl?: string
  className?: string
}

class ErrorBoundary extends Component<Props, State> {
  static defaultProps = {
    ErrorImgUrl: 'https://cdn.wul.ai/official/img/502.png',
    children: '我是示例～',
    className: '',
  }

  state = { hasError: false }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  render() {
    const { hasError } = this.state
    const { ErrorImgUrl, children, className } = this.props

    return hasError ? (
      <img className={`${styles['error-graph']} ${className}`} alt="errorImg" src={ErrorImgUrl} />
    ) : (
      children
    )
  }
}

export default ErrorBoundary
