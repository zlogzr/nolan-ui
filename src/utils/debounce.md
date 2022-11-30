---
title: debounce
group:
  title: 通用
  path: /common
  order: 1
---

# debounce 防抖

## 何时使用

例如 input 框输入

```js
import { debounce } from '@/utils';
```

## 代码展示

```js
function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
input1.addEventListener(
  'keyup',
  debounce(function () {
    console.log(input1.value);
  }, 600),
);
```
