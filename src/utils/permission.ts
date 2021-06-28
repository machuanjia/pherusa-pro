/*
 * @Author: D.Y
 * @Date: 2021-04-22 16:12:15
 * @LastEditTime: 2021-04-22 17:13:52
 * @LastEditors: D.Y
 * @FilePath: /pherusa-pro/src/utils/permission.ts
 * @Description:
 */

type IRoute = {
  path?: string;
  component?: any;
  meta?: {
    key?: string;
    name?: string;
    iconType?: string;
    isHidden?: string;
    permission?: string;
  };
  children?: IRoute[];
};

let permissionList: string[] = [];

export const setPermissions = (permissions: string[]) => {
  if (!([] instanceof Array)) {
    throw new Error('permissions must be array');
  }
  permissionList = permissions;
};

export const isPermission = (permission: string): boolean => {
  return permissionList.includes(permission);
};

export const getFlattenRoutes = (
  routeList: IRoute[],
  flattenRoutes: IRoute[],
) => {
  routeList.forEach(route => {
    flattenRoutes.push(route);
    if (route.children) {
      getFlattenRoutes(route.children, flattenRoutes);
    }
  });
};

export const filterFlattenRoutes = (routesList: IRoute[]) => {
  const flattenRoutes: IRoute[] = [];
  getFlattenRoutes(routesList, flattenRoutes);
  return flattenRoutes;
};

export const routeHasPermission = (route: IRoute) => {
  if (route.meta && route.meta.permission) {
    return permissionList.includes(route.meta.permission);
  }
  return true;
};

export const filterAsyncRoutes = (routesList: IRoute[]) => {
  const res: IRoute[] = [];
  routesList.forEach(route => {
    const r: IRoute = { ...route };
    if (routeHasPermission(r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children);
      }
      res.push(r);
    }
  });
  return res;
};
