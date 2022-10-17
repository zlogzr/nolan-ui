---
title: deepClone 深拷贝
group:
  title: 通用
  path: /common
  order: 1
---

# deepClone 深拷贝

## 何时使用

lodash 库中引用类型深度比较方法\_.cloneDeep，简易实现

```js
import { deepClone } from '@/utils';
```

## 代码展示

```js
function deepClone(obj = {}) {
  if (typeof obj != 'object' || obj === null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
```
