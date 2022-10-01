import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';

export type EllipsisTooltipProps = React.ComponentProps<typeof Tooltip>;

const EllipsisTooltip = (props: EllipsisTooltipProps): JSX.Element | null => {
  const { children, ...othProps } = props;
  const ref = useRef<HTMLElement>();
  const [visible, setVisible] = useState(true);

  const child = React.Children.only(children);
  let newChild;
  if (React.isValidElement(child)) {
    newChild = React.cloneElement(child, {
      // @ts-ignore
      ref: ref,
    });
  }
  useEffect(() => {
    if (ref.current) {
      const boo = ref.current.scrollWidth > ref.current.offsetWidth;
      // 没有省略号不显示浮框
      if (!boo) setVisible(false);
    }
  }, []);

  /* 没有 Children 不返回 */
  if (!children) {
    return null;
  }
  /* 有 Children 有省略号时显示浮框 */
  if (!!children && visible) {
    return <Tooltip {...othProps}>{newChild}</Tooltip>;
  }
  /* 有 Children 无省略号时返回 Children */
  return <>{children}</>;
};

export default EllipsisTooltip;
