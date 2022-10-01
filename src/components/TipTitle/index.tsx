/*
 * @Author: zhangyang
 * @Date: 2022-09-30 15:38
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-09-30 15:51
 * @FilePath: \nolan-ui\src\components\TipTitle\index.tsx
 * @Description: TipTitle组件
 */
import React, { CSSProperties, ReactNode, useState } from 'react';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { ReactComponent as Add } from './svg/add.svg';
import { ReactComponent as ActiveAdd } from './svg/add_active.svg';
import { ReactComponent as Edit } from './svg/edit.svg';
import { ReactComponent as ActiveEdit } from './svg/edit_active.svg';
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

const TipTitle = (props: TipTitleProps) => {
  const {
    title = '基本信息',
    className,
    style = {},
    showAdd,
    showEdit,
    onClick,
    tip,
    customIcon,
    children,
    isFold = true,
    spacing = 16,
    customFoldIcon,
  } = props;

  // 点击图标事件
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  // 是否打开 默认打开
  const [isOpen, setIsOpen] = useState(true);
  // 处理折叠
  const handleClick = () => {
    isFold && setIsOpen(!isOpen);
  };

  return (
    <div className={`n-tiptitle ${className}`} style={style}>
      <div
        className="n-background"
        style={{ cursor: isFold && children ? 'pointer' : '' }}
        onClick={handleClick}
      >
        <div className="n-left">
          <div className="bar" />
          <div className="title">{title}</div>
          {!customIcon && showAdd && (
            <div className="icon">
              <Add className="iconUsual" title={tip || ''} onClick={handleIconClick} />
              <ActiveAdd className="iconActive" onClick={handleIconClick} title={tip || ''} />
            </div>
          )}
          {!customIcon && !showAdd && showEdit && (
            <div className="icon">
              <Edit className="iconUsual" title={tip || ''} />
              <ActiveEdit className="iconActive" onClick={handleIconClick} title={tip || ''} />
            </div>
          )}
          {customIcon && (
            <div className="icon">
              <img
                className="iconUsual"
                src={customIcon.icon}
                alt=""
                title={tip || ''}
                onClick={handleIconClick}
              />
              {customIcon.activeIcon && (
                <img
                  className="iconActive"
                  src={customIcon.activeIcon}
                  alt=""
                  title={tip || ''}
                  onClick={handleIconClick}
                />
              )}
            </div>
          )}
        </div>
        {!customFoldIcon && children && isFold && (
          <div className="n-right">{isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />}</div>
        )}
        {/* 自定义折叠icon */}
        {customFoldIcon && children && isFold && (
          <div className="n-right">
            {isOpen ? customFoldIcon.UnFoldIcon : customFoldIcon.FoldIcon}
          </div>
        )}
      </div>
      {/* 折叠子元素 */}
      {children && (
        <div style={{ paddingTop: `${spacing}px`, display: isOpen ? 'block' : 'none' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default TipTitle;
