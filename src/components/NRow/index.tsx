/*
 * @Author: zhangyang
 * @Date: 2022-09-30 16:46
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:04
 * @FilePath: \nolan-ui\src\components\NRow\index.tsx
 * @Description: 行展示组件
 */

import styled from 'styled-components';

const ARow = styled.div<{
  between?: boolean;
  gap?: number;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}px` : 0)};
  > * {
    margin-top: 0 !important;
    margin-right: ${(props) => (props.gap ? `${props.gap}px` : '12px')};
    margin-bottom: 0 !important;
  }
`;

export default ARow;
