import React, { Component } from 'react'

type IAsyncComponentState = {
  component: any
}

export const asyncComponent = (importComponent: any) => {
  return class AsyncComponent extends Component<any, IAsyncComponentState> {
    constructor(props: any) {
      super(props)
      this.state = {
        component: null,
      }
    }
    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component,
      })
    }
    render() {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }
}
