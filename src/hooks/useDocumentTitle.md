---
title: useDocumentTitle
group:
  title: 通用
  path: /common
  order: 2
---

---

## useDocumentTitle

## 何时使用

- 设置网页卡片标题的内容，keepOnUnmount 为 false 时能实现进入一个页面标题改变，离开页面就恢复之前的标题
- react-helmet 库也可解决'设置网页卡片标题的内容'问题：https://github.com/nfl/react-helmet

```js
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
useDocumentTitle('详情');
```

## 代码展示

```ts
import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
```
