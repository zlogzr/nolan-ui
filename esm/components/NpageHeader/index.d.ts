import { ReactNode, CSSProperties } from 'react';
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
declare const NPageHeader: (props: NPageHeaderProps) => JSX.Element;
export default NPageHeader;
