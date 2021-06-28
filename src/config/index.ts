/*
 * @Author: D.Y
 * @Date: 2021-04-26 14:09:47
 * @LastEditTime: 2021-04-26 14:28:40
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/config/index.ts
 * @Description:
 */
import { merge } from 'lodash';

type IOptions = {
  icon: {
    font: string;
    prefix: string;
  };
};

export class ProConfigration {
  static options: IOptions = {
    icon: {
      font: 'iconfont',
      prefix: 'icon-',
    },
  };
  public static setConfigs(options: IOptions) {
    ProConfigration.options = merge(ProConfigration.options, options);
  }
}
