---
title: NLayout
group:
  title: 业务
  path: /business
  order: 2
---

# NLayout 布局组件

## 何时使用

封装 antd `layout` 组件，简单使用

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { NLayout } from 'nolan-ui';

export default () => (
  <NLayout header={<div>header</div>} sider={<div>sider</div>} content={<div>content</div>} />
);
```

## API

| 属性    | 说明           | 类型              | 默认值 |
| ------- | -------------- | ----------------- | ------ |
| header  | 必传，头部     | `React.ReactNode` | -      |
| sider   | 必传，侧边栏   | `React.ReactNode` | -      |
| content | 必传，主体内容 | `React.ReactNode` | -      |
