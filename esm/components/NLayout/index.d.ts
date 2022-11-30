import { ReactNode } from 'react';
import './style.less';
export interface NLayoutProps {
    header?: ReactNode;
    sider?: ReactNode;
    content?: ReactNode;
}
declare const NLayout: (props: NLayoutProps) => JSX.Element;
export default NLayout;
