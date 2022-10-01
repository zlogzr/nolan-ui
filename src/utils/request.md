---
title: request
nav:
  path: /utils
  title: 方法
  order: 2
group:
  title: 业务
  path: /business
  order: 2
---

# request 请求方法

## 何时使用

基于 axios 封装，可在项目中使用

```js
import { get, post } from '@/utils/request';
```

## 代码展示

```ts
/*
 * @Author: 张洋
 * @Description: 请求文件  基于axios
 */
import { BackResult } from '@/types';
import axios from 'axios';
import qs from 'qs';

// 创建axios实例
const $axios = axios.create({
  baseURL: '/',
  timeout: 30000, // 30秒
  responseType: 'json',
});

// 响应拦截
$axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 网络错误
    return Promise.reject(error);
  },
);

export const get = (
  url: string,
  params?: { [key: string]: any },
  ...args: any[]
): Promise<BackResult> =>
  new Promise((resolve, reject) => {
    $axios({
      method: 'GET',
      url,
      params,
      paramsSerializer(params) {
        return qs.stringify(params);
      },
      ...args,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const post = (
  url: string,
  params?: { [key: string]: any },
  ...args: any[]
): Promise<BackResult> =>
  new Promise((resolve, reject) => {
    $axios({
      method: 'POST',
      url,
      data: params,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      ...args,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const { put, patch, delete: del } = $axios;

export default $axios;
```

## 注意点

BackResult 类型为后端返回数据的类型, 比如：

```ts
interface BackResult {
  code?: number;
  msg?: string;
  data?: any;
}
```
