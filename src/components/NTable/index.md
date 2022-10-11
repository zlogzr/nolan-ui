---
title: NTable
group:
  title: 业务
  path: /business
  order: 2
---

# NTable 表格

## 何时使用

基于 antd 的 `Table` 封装，将分页逻辑封装到组件内部，更简单的使用 `Table` 组件

## 代码演示

```tsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React, { useRef, useState } from 'react';
import { Select, Button, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { NTable } from 'nolan-ui';

const { Option } = Select;

export interface PProps {
  status?: string;
}

export default () => {
  const columns: ColumnsType<any> = [
    {
      title: '用户名',
      dataIndex: 'username',
      width: '13%',
    },
    {
      title: '姓名',
      dataIndex: 'displayName',
      width: '12%',
    },
    {
      title: '启用状态',
      dataIndex: 'status',
      width: '11%',
    },
  ];
  // 定义 table 的 ref
  const ref = useRef();
  // 定义 table 参数
  const [params, setParams] = useState<PProps>();

  // 启用状态改变
  const statusChange = (value: string) => {
    setParams({ ...params, status: value });
  };

  // 刷新
  const refresh = () => {
    const { getData }: any = ref.current;
    getData();
  };

  // 重置
  const reset = () => {
    setParams({});
    const { getData, setPageParams }: any = ref.current;
    setPageParams({ pageNum: 1, pageSize: 10 });
    getData();
  };

  const getList = async (data: any) => {
    try {
      const res = await get('/api/userinfo', data);
      return {
        data: res.data,
        total: res.pageInfo.total,
      };
    } catch {
      return {
        data: [],
        total: 0,
      };
    }
  };
  return (
    <div style={{ padding: '16px' }}>
      {/* 查询条件 */}
      <Space>
        <Select
          style={{ width: 120 }}
          value={params?.status}
          allowClear
          placeholder="启用状态"
          onChange={statusChange}
        >
          <Option value="1">启用</Option>
          <Option value="2">停用</Option>
        </Select>
        <Button type="primary" onClick={refresh}>
          查询
        </Button>
        <Button type="primary" onClick={reset}>
          重置
        </Button>
      </Space>
      {/* Table */}
      <NTable
        ref={ref}
        columns={columns}
        listApi={getList}
        pageName="pageNum"
        sizeName="pageSize"
        rowKey="id"
        othParams={params}
      />
    </div>
  );
};
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pageName | 后端返回的分页参数 page 名 | `string` | `page` |
| sizeName | 后端返回的分页参数 size 名 | `string` | `size` |
| initPage | 页面初始渲染 page size 大小 | `[number, number]` | `[1, 10]` |
| listApi | 必传，返回 `T` 类型的 Promise 的函数 | `(data?: any)=> Promise<T>` | - |
| othParams | Table 除 page size 之外的其他参数 | `any` | - |
| - | 其他参数同 [Table](https://ant.design/components/table-cn/#API) 参数 | - | - |

## 注意点

1. listApi 中 T 类型：

```js
{
  data: any[],
  total: number
}
```

2. listApi 参数返回的 data 为 Table 的参数
