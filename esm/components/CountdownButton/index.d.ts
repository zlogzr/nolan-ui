import React from 'react';
interface CountdownButtonProps {
    count?: number;
    title?: string;
    onClick?: () => Promise<boolean>;
    style?: React.CSSProperties;
    className?: string;
}
declare function CountdownButton(props: CountdownButtonProps): JSX.Element;
export default CountdownButton;
