---
title: getUrlParams
group:
  title: 通用
  path: /common
  order: 1
---

# getUrlParams 解析 url 参数

## 何时使用

- 用于获取 url search 参数

```js
import { getUrlParams } from '@/utils';
```

## 代码展示

- 传统方式，兼容性高

```js
function getUrlParams(name) {
  const search = location.search.substr(1);
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const res = search.match(reg);
  if (res === null) {
    return null;
  }
  return res[2];
}
console.log(getUrlParams('b'));
```

- URLSearchParams

```js
function getUrlParams(name) {
  const search = location.search;
  const p = new URLSearchParams(search);
  return p.get(name);
}
console.log(getUrlParams('c'));
```
