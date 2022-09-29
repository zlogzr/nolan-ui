---
title: EllipsisTooltip
group:
  title: 通用
  path: /common
  order: 1
---

# EllipsisTooltip 超出显示省略号组件

## 何时使用

基于 antd 的 `Tooltip` 改造，文字有省略号时显示气泡，无省略号时不显示气泡

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { EllipsisTooltip } from 'nolan-ui';

export default () => (
  <EllipsisTooltip title="Tooltip will show on mouse enter.">
    <div className="box">Tooltip will show on mouse enter.</div>
  </EllipsisTooltip>
);

/* .box {
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */
```

<style>
  .box {
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

## API

同 antd [Tooltip](https://ant.design/components/tooltip-cn/#API) 参数
