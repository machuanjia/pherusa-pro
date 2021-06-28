/*
 * @Author: D.Y
 * @Date: 2021-04-22 17:15:14
 * @LastEditTime: 2021-04-22 17:33:51
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/RouteView/RouteView.tsx
 * @Description:
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoFond from '../404';

/**
 *
 * @param routers 传入的渲染路由，如果不传则为跟路由
 * @param extraProps
 * @param switchProps
 *
 */
export const generateRoutes = (
  routes: Record<string, unknown>[],
  extraProps = {},
  switchProps = {},
) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            return <route.component {...props} {...extraProps} route={route} />;
          }}
        />
      ))}
      <Route component={NoFond} />
    </Switch>
  ) : null;
};
