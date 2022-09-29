import { Tooltip } from 'antd';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type TooltipProps = React.ComponentProps<typeof Tooltip>;

export type EllipsisTooltipProps = TooltipProps & {
  children: ReactNode;
};

const EllipsisTooltip = (props: EllipsisTooltipProps): JSX.Element => {
  const { children, ...othProps } = props;
  const ref = useRef<HTMLElement>(null);
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

  if (visible) {
    return <Tooltip {...othProps}>{newChild}</Tooltip>;
  }
  return <div>{children}</div>;
};

export default EllipsisTooltip;
