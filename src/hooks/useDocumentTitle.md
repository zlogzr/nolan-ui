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

设置网页卡片标题的内容

```js
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
useDocumentTitle('详情');
```

## 代码展示

```ts
import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current;
  // 页面加载时: 旧title
  // 加载后：新title

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 如果不指定依赖，读到的就是旧title
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
```
