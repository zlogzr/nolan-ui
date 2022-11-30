/// <reference types="react" />
export declare const ErrorBox: ({ error }: {
    error: unknown;
}) => JSX.Element | null;
export declare const FullPageLoading: () => JSX.Element;
export declare const FullPageErrorFallback: ({ error }: {
    error: Error | null;
}) => JSX.Element;
