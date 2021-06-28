import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ErrorBoundary from '../index';

class TestDemo extends Component {
  render() {
    return <div>demo</div>;
  }
}

class TestErrorDemo extends Component {
  render() {
    throw new Error('I crashed!');
    return null;
  }
}

// let container: any = null
// beforeEach(() => {
//   container = document.createElement('div')
//   document.body.appendChild(container)
// })

// afterEach(() => {
//   unmountComponentAtNode(container)
//   container.remove()
//   container = null
// })

// describe('Test ErrorBoundary', () => {
//   it('ErrorBoundary render correct ', () => {
//     act(() => {
//       render(
//         <ErrorBoundary>
//           <TestDemo />
//         </ErrorBoundary>,
//         container,
//       )
//     })
//     expect(container.textContent).toBe('demo')
//   })
//   it('ErrorBoundary render error', () => {
//     act(() => {
//       render(
//         <ErrorBoundary>
//           <TestErrorDemo />
//         </ErrorBoundary>,
//         container,
//       )
//     })
//     const errorImg = container.querySelector('.error-graph')
//     expect(errorImg).not.toBeNull()
//   })
// })

describe('Test ErrorBoundary', () => {
  it('ErrorBoundary render correct ', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <div>demo</div>
      </ErrorBoundary>,
    );
    expect(wrapper.text()).toBe('demo');
  });
  it('ErrorBoundary render error ', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <TestErrorDemo />
      </ErrorBoundary>,
    );
    expect(wrapper.exists('.error-graph')).toBeTruthy();
  });
});
