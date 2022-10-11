import { Button } from 'antd';
import React from 'react';
import { useRef, useState } from 'react';

interface CountdownButtonProps {
  count?: number;
  title?: string;
  onClick?: () => Promise<boolean>;
  style?: React.CSSProperties;
  className?: string;
}

function CountdownButton(props: CountdownButtonProps) {
  const {
    count: num = 60,
    title = '验证码',
    onClick = () => Promise.resolve(true),
    style = {},
    className = '',
  } = props;

  const [count, setCount] = useState(num);
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef(num);

  /* 处理点击事件 */
  const handleClick = async () => {
    if (isRunning) return;
    const status = await onClick();
    if (status) {
      setIsRunning(true);
      const timer = setInterval(() => {
        setCount(--countRef.current);
        /* countRef.current 为 0 时重置 */
        if (countRef.current === 0) {
          clearTimeout(timer);
          countRef.current = num;
          setIsRunning(false);
          setCount(num);
          return;
        }
      }, 1000);
    }
  };
  return (
    <Button
      disabled={isRunning}
      style={{ width: '120px', ...style }}
      className={className}
      onClick={handleClick}
    >
      {isRunning ? `${count}s 后重试` : title}
    </Button>
  );
}

export default CountdownButton;
