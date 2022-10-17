---
title: useMousePosition
group:
  title: 通用
  path: /common
  order: 2
---

---

## useMousePosition

## 何时使用

获取鼠标的位置，简单的 hook 应用，用于理解 hook 复用逻辑

```js
import { useMousePosition } from '@/hooks/useMousePosition';
const [x, y] = useMousePosition();
```

## 代码展示

```ts
import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function mouseMoveHandler(event) {
      setX(event.clientX);
      setY(event.clientY);
    }

    // 绑定事件
    document.body.addEventListener('mousemove', mouseMoveHandler);

    // 解绑事件
    return () => document.body.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return [x, y];
}
```
