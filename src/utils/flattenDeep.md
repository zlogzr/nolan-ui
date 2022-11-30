---
title: flattenDeep
group:
  title: 通用
  path: /common
  order: 1
---

# flattenDeep 数组拍平

## 注意

- 数组自带的方法 arr.flat() 只能拍平一层
- lodash 里方法 _.flatten(arr) 拍平一层， _.flattenDeep(arr) 完全拍平

```js
import { flattenDeep } from '@/utils';
```

## 代码展示

```js
function flat(arr) {
  // 验证 arr 中，还有没有深层数组
  const isDeep = arr.some((item) => item instanceof Array);
  if (!isDeep) {
    return arr;
  }
  const res = Array.prototype.concat.apply([], arr); // concat 可拍平一层
  return flat(res); // 递归
}
const res = flat([1, 2, [3, [4, 5]]]);
console.log(res); // [1, 2, 3, 4, 5]
```
