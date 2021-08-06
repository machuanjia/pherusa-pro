/*
 * @Author: D.Y
 * @Date: 2021-02-04 10:15:26
 * @LastEditTime: 2021-08-06 16:34:42
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/components/index.ts
 * @Description: 组件导出文件
 */

export { default as ErrorBoundary } from './ErrorBoundary';
export { default as NoFond } from './404';
export { default as RouteViewer } from './RouteView';
export { generateRoutes } from './RouteView/RouteGenerator';
export { default as GlobalLoading } from './GlobalLoading';
export * from './RouteView/RouteGenerator';
export { default as ContentLayoutComponent } from './ContentLayout';
export { listMixin } from './ListMixin';
export { asyncComponent } from './RouteView/AsyncComponent';
export { default as PartLoading } from './PartLoading';
export { default as Icon } from './Icon';
export { Text } from './Text';
