---
title: TipTitle
group:
  title: 通用
  path: /common
  order: 1
---

# TipTitle 提示标题

## 何时使用

1. 用于标题提示，内置了添加和编辑图标，也可自定义图标
2. 使用 children 属性可以控制 children 内容的展开和折叠

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { TipTitle } from 'nolan-ui';

export default () => {
  return <TipTitle showAdd tip="添加" onClick={() => alert('添加')} />;
};
```

```jsx
/**
 * title: 自定义icon
 * desc: 传入customIcon属性自定义icon
 */
import React from 'react';
import { TipTitle } from 'nolan-ui';
import Edit from './svg/edit.svg';
import activeEdit from './svg/edit_active.svg';

export default () => {
  return (
    <TipTitle
      customIcon={{ icon: Edit, activeIcon: activeEdit }}
      title="自定义icon"
      tip="自定义icon"
      onClick={() => alert('自定义icon')}
    />
  );
};
```

```tsx
/**
 * title: 可折叠展开标题
 * desc: 点击可以上下展开收缩，有children时默认有折叠展开功能，可使用isFold属性关闭折叠展开功能
 */
import React from 'react';
import { TipTitle } from 'nolan-ui';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: number;
  name: string;
  age: number;
}

export default () => {
  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
  ];

  const data: DataType[] = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
    },
  ];

  return (
    <TipTitle title="标题" showAdd tip="添加" onClick={() => alert('添加')}>
      <Table columns={columns} dataSource={data} />
    </TipTitle>
  );
};
```

```jsx
/**
 * title: 自定义折叠icon
 * desc: 自定义折叠icon
 */
import React from 'react';
import { TipTitle } from 'nolan-ui';
import { RightOutlined, DownOutlined } from '@ant-design/icons';

export default () => {
  return (
    <TipTitle
      title="标题"
      onClick={() => alert('添加')}
      customFoldIcon={{ UnFoldIcon: <DownOutlined />, FoldIcon: <RightOutlined /> }}
    >
      <div>内容</div>
    </TipTitle>
  );
};
```

## API

| 属性           | 说明                         | 类型                  | 默认值     |
| -------------- | ---------------------------- | --------------------- | ---------- |
| title          | 标题内容                     | `string`              | `基本信息` |
| showAdd        | 是否展示添加图标             | `boolean`             | false      |
| showEdit       | 是否展示编辑图标             | `boolean`             | false      |
| tip            | 图标悬浮提示                 | `string`              | -          |
| onClick        | 图标点击事件                 | `() => void`          | -          |
| className      | 类名                         | `string`              | -          |
| style          | 行内样式                     | `React.CSSProperties` | -          |
| customIcon     | 自定义 icon                  | `IconProps`           | -          |
| children       | 存在时内容在下方展示，可折叠 | `React.ReactNode`     | -          |
| spacing        | 上方标题与下方内容的间距     | `number`              | 16         |
| isFold         | 控制是否需要折叠功能         | `boolean`             | true       |
| customFoldIcon | 自定义折叠的 icon            | `FoldIconProps`       | -          |

## 注意点

1. 组件内置了添加和编辑图标，只能使用一个图标

2. 需要自定义图标使用 customIcon 属性，传入图标的引用地址

3. 自定义折叠图标使用 customFoldIcon 属性, 传入图标组件

IconProps 类型定义：

```js
interface IconProps {
  icon: string;
  activeIcon: string;
}
```

FoldIconProps 类型定义：

```js
interface IconProps {
  FoldIcon: ReactNode;
  UnFoldIcon: ReactNode;
}
```
