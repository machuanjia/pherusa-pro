/*
 * @Author: D.Y
 * @Date: 2021-04-22 14:12:06
 * @LastEditTime: 2021-04-29 11:26:13
 * @LastEditors: D.Y
 * @FilePath: /laiye-pro/src/utils/axios.ts
 * @Description:
 */

import axios from 'axios'

type IOption = {
  baseURL?: string
  timeout?: number
  requestAction?: (config: any) => {}
  responseAction?: any
}

export const defaultOptions: IOption = {
  baseURL: '/api',
  timeout: 5000,
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  requestAction: config => {},
  responseAction: null,
}

export const getRequest = (ops: IOption) => {
  const options = Object.assign(defaultOptions, ops)
  const service = axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout,
  })

  service.interceptors.request.use(
    config => {
      options.requestAction && options.requestAction(config)
      return config
    },
    error => {
      Promise.reject(error)
    },
  )
  service.interceptors.response.use(
    response => {
      const res = response.data
      if (options.responseAction) {
        return options.responseAction(res)
      }
      if (res.code !== 200) {
        return Promise.reject(res)
      }
      return response.data
    },
    error => {
      return Promise.reject(error)
    },
  )
  return service
}
