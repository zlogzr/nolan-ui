import React from 'react';
export declare type FallbackRender = (props: {
    error: Error | null;
}) => React.ReactElement;
declare type IProps = React.PropsWithChildren<{
    fallbackRender: FallbackRender;
}>;
interface IState {
    error: Error | null;
}
export default class ErrorBoundary extends React.Component<IProps, IState> {
    state: {
        error: null;
    };
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    render(): React.ReactNode;
}
export {};
