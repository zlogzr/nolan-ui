---
title: throttle
group:
  title: 通用
  path: /common
  order: 1
---

# throttle 节流

## 何时使用

例如拖拽

```js
import { throttle } from '@/utils';
```

## 代码展示

```js
function throttle(fn, delay = 100) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments); // 把事件监听的e传给fn
      timer = null;
    }, delay);
  };
}
div1.addEventListener(
  'drag',
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
  }, 100),
);
```
