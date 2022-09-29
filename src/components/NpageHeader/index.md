---
title: NPageHeader
group:
  title: 业务
  path: /business
  order: 2
---

# NPageHeader 页头布局组件

## 何时使用

需要页头布局组件时，使用

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { Input, Space, Button } from 'antd';
import { NPageHeader } from 'nolan-ui';

const { Search } = Input;

export default () => (
  <div className="page">
    <NPageHeader
      title="页头"
      extra={
        <Search
          allowClear
          maxLength={50}
          placeholder="请输入搜索内容"
          onSearch={() => console.log('搜索')}
        />
      }
      children={
        <Space>
          <Button type="primary">上传</Button>
          <Button type="primary" danger disabled>
            删除
          </Button>
        </Space>
      }
    />
  </div>
);

/* .page {
  height: 150px;
  background: #f7f6f9;
  padding: 10px;
} */
```

<style>
  .page {
    height: 150px;
    background: #f7f6f9;
    padding: 10px;
  }
</style>

## API

| 属性     | 说明               | 类型                  | 默认值 |
| -------- | ------------------ | --------------------- | ------ |
| title    | 标题               | `React.ReactNode`     | -      |
| extra    | 标题右侧组件       | `React.ReactNode`     | -      |
| children | 标题下方的操作区域 | `React.ReactNode`     | -      |
| style    | style 样式         | `React.CSSProperties` | {}     |
