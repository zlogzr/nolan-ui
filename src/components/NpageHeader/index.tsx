import React, { ReactNode, CSSProperties } from 'react';
import './style.less';

export interface NPageHeaderProps {
  /** 标题 */
  title: ReactNode;
  /** 标题右侧组件 */
  extra?: ReactNode;
  /** 标题下方的操作区域 */
  children?: ReactNode;
  /** style样式 */
  style?: CSSProperties;
}

const NPageHeader = function (props: NPageHeaderProps) {
  const { title, extra, children, style = {} } = props;
  return (
    <div className="n-page-common-header-box" style={style}>
      <div className="n-page-name">
        <div className="left">{title}</div>
        {extra && <div className="right">{extra}</div>}
      </div>
      {children && <div className="n-page-content">{children}</div>}
    </div>
  );
};

export default NPageHeader;
