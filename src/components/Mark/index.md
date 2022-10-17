---
title: Mark
group:
  title: 通用
  path: /common
  order: 1
---

# Mark 高亮关键字组件

## 何时使用

搜索关键字高亮时使用, name 为展示的文字，keyword 搜素输入框展示的文字

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { Mark } from 'nolan-ui';

export default () => <Mark name="这是一段文字" keyword="文字" />;
```

## API

| 属性    | 说明           | 类型     | 默认值 |
| ------- | -------------- | -------- | ------ |
| name    | 必传，文字内容 | `string` | -      |
| keyword | 必传，关键字   | `string` | -      |
