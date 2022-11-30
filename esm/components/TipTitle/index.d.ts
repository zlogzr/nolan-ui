import { CSSProperties, ReactNode } from 'react';
import './style.less';
export interface IconProps {
    icon: string;
    activeIcon: string;
}
export interface FoldIconProps {
    FoldIcon: ReactNode;
    UnFoldIcon: ReactNode;
}
export interface TipTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
    showAdd?: boolean;
    showEdit?: boolean;
    tip?: string;
    onClick?: () => void;
    customIcon?: IconProps;
    children?: ReactNode;
    isFold?: boolean;
    spacing?: number;
    customFoldIcon?: FoldIconProps;
}
declare const TipTitle: (props: TipTitleProps) => JSX.Element;
export default TipTitle;
