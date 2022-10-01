/*
 * @Author: zhangyang
 * @Date: 2022-10-01 16:09
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:25
 * @FilePath: \nolan-ui\src\components\ErrorBoundary\index.tsx
 * @Description: 错误边界
 */
import React from 'react';

export type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

type IProps = React.PropsWithChildren<{ fallbackRender: FallbackRender }>;

interface IState {
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  state = { error: null };

  // 当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
