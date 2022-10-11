---
title: CountdownButton
group:
  title: 通用
  path: /common
  order: 1
---

# CountdownButton 倒计时按钮

## 何时使用

点击倒计时，可在发送验证码等场景使用

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的使用
 */
import React from 'react';
import { CountdownButton } from 'nolan-ui';

export default () => (
  <CountdownButton count={5} title="发送验证码" onClick={() => Promise.resolve(true)} />
);
```

## API

| 属性      | 说明               | 类型                     | 默认值                      |
| --------- | ------------------ | ------------------------ | --------------------------- |
| count     | 倒计时秒数         | `number`                 | 60                          |
| title     | 倒计时前的按钮描述 | `string`                 | 验证码                      |
| onClick   | 发送请求           | `() => Promise<boolean>` | () => Promise.resolve(true) |
| style     | 样式修改           | `React.CSSProperties`    | -                           |
| className | 样式修改           | `string`                 | -                           |
