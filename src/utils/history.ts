/*
 * @Author: D.Y
 * @Date: 2021-04-20 10:06:53
 * @LastEditTime: 2021-06-28 10:17:44
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/utils/history.ts
 * @Description:
 */

import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

export const goTo = (path: string) => {
  browserHistory.push(path);
};

export const getRoute = () => {
  return browserHistory.location.pathname;
};
