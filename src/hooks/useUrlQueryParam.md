---
title: useUrlQueryParam
nav:
  path: /hooks
  title: hooks
  order: 3
group:
  title: 通用
  path: /common
  order: 2
---

---

## useUrlQueryParam

## 何时使用

获取和设置 url 路由 query 的键值对对象

```js
import { useUrlQueryParam } from '@/hooks/useUrlQueryParam';
```

## 代码展示

```ts
import { cleanObject } from '@/utils';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

/**
 * @description 返回页面url中，指定键的参数值
 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParam] = useSearchParams();
  return [
    keys.reduce(
      (prev, key) => ({ ...prev, [key]: searchParams.get(key) || '' }),
      {} as { [key in K]: string },
    ),
    (params: { [key in string]: unknown }) => {
      const o = cleanObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParam(o);
    },
  ] as const;
};
```
