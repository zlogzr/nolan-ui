---
title: ErrorBoundary
group:
  title: 通用
  path: /common
  order: 1
---

# ErrorBoundary 错误边界

## 何时使用

需要需要错误边界时，配合 `FullPageErrorFallback` 组件使用

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { ErrorBoundary, FullPageErrorFallback } from 'nolan-ui';

export default () => (
  <ErrorBoundary fallbackRender={FullPageErrorFallback}>
    <div>内容</div>
  </ErrorBoundary>
);
```

## API

| 属性           | 说明                     | 类型 | 默认值 |
| -------------- | ------------------------ | ---- | ------ |
| fallbackRender | 错误边界触发时展示的组件 | `T`  | -      |

## 注意点

error 的 T 类型：

```ts
type T = (props: { error: Error | null }) => React.ReactElement;
```
