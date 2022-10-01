---
title: NRow
group:
  title: 业务
  path: /business
  order: 2
---

# NRow 行展示组件

## 何时使用

用于一行展示多个元素，例如头部导航展示，可选择是否两边对齐

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { NRow } from 'nolan-ui';

export default () => (
  <NRow>
    <h2>Blog</h2>
    <h2>my</h2>
  </NRow>
);
```

## API

| 属性         | 说明                     | 类型      | 默认值 |
| ------------ | ------------------------ | --------- | ------ |
| gap          | 内部元素右边距           | `number`  | `12px` |
| between      | 内部元素是否两边对齐排列 | `boolean` | -      |
| marginBottom | 下边距                   | `number`  | `0`    |
