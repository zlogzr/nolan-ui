---
title: FullPageErrorFallback
group:
  title: 通用
  path: /common
  order: 1
---

# FullPageErrorFallback 全局错误

## 何时使用

全局的错误样式

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { FullPageErrorFallback } from 'nolan-ui';

export default () => <FullPageErrorFallback error={new Error('抛出错误')} />;
```

## API

| 属性  | 说明           | 类型 | 默认值 |
| ----- | -------------- | ---- | ------ |
| error | 必传，错误信息 | `T`  |

## 注意点

error 的 T 类型：

```ts
type T = Error | null;
```
