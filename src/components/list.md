---
title: 目录
group:
  title: 目录
  path: /list
  order: 0
---

# 目录

`nolan-ui` 是基于 `antd` 基础 UI 组件搭建的业务组件库， 我们还加入常用方法库和 hooks 库。

```jsx
/**
 * inline: true
 */
import React, { useState } from 'react';
import { Input, Divider, Row, Col, Card, Typography, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import { EllipsisTooltip } from 'nolan-ui';
import list from './list/list.json';

const { Title } = Typography;

export default () => {
  const [search, setSearch] = useState('');

  return (
    <section>
      <Divider />
      <Input
        value={search}
        placeholder="搜索组件"
        className="components-catalog-search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        autoFocus
      />
      <Divider />
      {list.map((group) => {
        const components = group.children.filter(
          (component) =>
            !search.trim() ||
            component.title.toLowerCase().includes(search.trim().toLowerCase()) ||
            (component.subtitle || '').toLowerCase().includes(search.trim().toLowerCase()),
        );
        return components.length ? (
          <div key={group.title} className="components-catalog">
            <Title level={2} className="components-catalog-group-title">
              <Space align="center">
                {group.title}
                <Tag className="components-catalog-group-tag">{components.length}</Tag>
              </Space>
            </Title>

            <Row gutter={[24, 24]}>
              {components.map((component) => (
                <Col xs={24} sm={12} lg={8} xl={6} key={component.title}>
                  <Link to={component.href}>
                    <Card
                      size="small"
                      className="components-catalog-card"
                      title={
                        <EllipsisTooltip title={component.subtitle}>
                          <div className="components-catalog-title">
                            {component.title} {component.subtitle}
                          </div>
                        </EllipsisTooltip>
                      }
                    >
                      <div className="components-catalog-img">
                        <img src={component.cover} alt={component.title} />
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ) : null;
      })}
    </section>
  );
};
```

<style>
  .components-catalog {
    padding: 0;
  }
  .components-catalog-search {
    width: 100%;
    padding: 0;
    font-size: 20px;
    border: 0!important;
    box-shadow: none;
  }
  .components-catalog-search:focus {
    border: 0!important;
    box-shadow: none;
  }
  .components-catalog-search input {
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    border: 0;
  }
  .components-catalog-search .action {
    color: #bbb;
  }
  .components-catalog h2 {
    font-size: 24px;
    color: #000000d9;
    font-weight: 500;
    line-height: 32px;
    margin: 1.6em 0 .6em;

  }
  .components-catalog-group-title {
    margin-bottom: 24px !important;
  }
  .components-catalog-group-tag {
    display: block;
  }
  .components-catalog-card {
    cursor: pointer;
    transition: all .5s;
  }
  .components-catalog-card:hover {
    box-shadow: 0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;
  }
  .components-catalog-title {
    overflow: hidden;
    color: #000000d9;
    text-overflow: ellipsis;
  }
  .components-catalog-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 152px;
  }
</style>
