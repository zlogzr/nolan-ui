---
title: resetRoute
group:
  title: 业务
  path: /business
  order: 2
---

# resetRoute 重置路由

## 何时使用

重置路由，比如点击 logo 时使用

```js
import { resetRoute } from '@/utils';
```

## 代码展示

```ts
export const resetRoute = () => (window.location.href = window.location.origin);
```
