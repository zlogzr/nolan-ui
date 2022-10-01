---
title: cleanObject
group:
  title: 通用
  path: /common
  order: 1
---

# cleanObject

## 何时使用

清除对象中键值为空的键值对

```js
import { cleanObject } from '@/utils';
```

## 代码展示

```ts
export const isVoid = (value: unknown) => value == null || value === '';
export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
```
