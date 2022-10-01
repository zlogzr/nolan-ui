/*
 * @Author: zhangyang
 * @Date: 2022-10-01 16:14
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:31
 * @FilePath: \nolan-ui\src\components\lib\index.tsx
 * @Description: 小组件库
 */

import React from 'react';
import { Spin, Typography } from 'antd';
import styled from 'styled-components';

// 类型守卫
const isError = (value: any): value is Error => value?.message;
// 错误提示组件
export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={'danger'}>{error?.message}</Typography.Text>;
  }
  return null;
};

/* 全局样式组件 */
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 路由切换 */
export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'} />
  </FullPage>
);

/* 全局错误 */
export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
);
