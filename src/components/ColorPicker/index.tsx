/*
 * @Author: D.Y
 * @Date: 2021-05-08 09:34:47
 * @LastEditTime: 2021-06-16 09:35:32
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/ColorPicker/index.tsx
 * @Description:
 */

import React, { Component } from 'react';
//@ts-ignore
import { Popover, Tag } from 'antd';
//@ts-ignore
import { SketchPicker } from 'react-color';

interface IColorPicker {
  value?: string;
  onChange?: (value: string) => void;
}

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

type State = {
  color: string;
};

export default class ColorPickerComponent extends Component<Props, State> {
  constructor(props: IColorPicker) {
    super(props);
    this.state = {
      color: '#79adf8',
    };
  }

  componentWillReceiveProps({ value = '' }) {
    if (value !== this.state.color) {
      this.setState({
        color: value,
      });
    }
  }

  changeColor({ hex = '' }) {
    const { onChange } = this.props;
    onChange && onChange(hex);
  }

  render() {
    const { color } = this.state;
    return (
      <Popover
        placement="bottom"
        content={
          <SketchPicker
            color={color}
            onChangeComplete={($event: any) => {
              this.changeColor($event);
            }}
          />
        }
        overlayClassName="color-picker-wrap"
        trigger="click"
      >
        <Tag className="pointer" color={color}>
          {color}
        </Tag>
      </Popover>
    );
  }
}
