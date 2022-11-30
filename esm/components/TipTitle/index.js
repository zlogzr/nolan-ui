function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: zhangyang
 * @Date: 2022-09-30 15:38
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-09-30 15:51
 * @FilePath: \nolan-ui\src\components\TipTitle\index.tsx
 * @Description: TipTitle组件
 */
import React, { useState } from 'react';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { ReactComponent as Add } from "./svg/add.svg";
import { ReactComponent as ActiveAdd } from "./svg/add_active.svg";
import { ReactComponent as Edit } from "./svg/edit.svg";
import { ReactComponent as ActiveEdit } from "./svg/edit_active.svg";
import "./style.less";

var TipTitle = function TipTitle(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '基本信息' : _props$title,
      className = props.className,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      showAdd = props.showAdd,
      showEdit = props.showEdit,
      onClick = props.onClick,
      tip = props.tip,
      customIcon = props.customIcon,
      children = props.children,
      _props$isFold = props.isFold,
      isFold = _props$isFold === void 0 ? true : _props$isFold,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 16 : _props$spacing,
      customFoldIcon = props.customFoldIcon; // 点击图标事件

  var handleIconClick = function handleIconClick(e) {
    e.stopPropagation();
    onClick === null || onClick === void 0 ? void 0 : onClick();
  }; // 是否打开 默认打开


  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1]; // 处理折叠


  var handleClick = function handleClick() {
    isFold && setIsOpen(!isOpen);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "n-tiptitle ".concat(className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "n-background",
    style: {
      cursor: isFold && children ? 'pointer' : ''
    },
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "n-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), !customIcon && showAdd && /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(Add, {
    className: "iconUsual",
    title: tip || '',
    onClick: handleIconClick
  }), /*#__PURE__*/React.createElement(ActiveAdd, {
    className: "iconActive",
    onClick: handleIconClick,
    title: tip || ''
  })), !customIcon && !showAdd && showEdit && /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(Edit, {
    className: "iconUsual",
    title: tip || ''
  }), /*#__PURE__*/React.createElement(ActiveEdit, {
    className: "iconActive",
    onClick: handleIconClick,
    title: tip || ''
  })), customIcon && /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("img", {
    className: "iconUsual",
    src: customIcon.icon,
    alt: "",
    title: tip || '',
    onClick: handleIconClick
  }), customIcon.activeIcon && /*#__PURE__*/React.createElement("img", {
    className: "iconActive",
    src: customIcon.activeIcon,
    alt: "",
    title: tip || '',
    onClick: handleIconClick
  }))), !customFoldIcon && children && isFold && /*#__PURE__*/React.createElement("div", {
    className: "n-right"
  }, isOpen ? /*#__PURE__*/React.createElement(CaretDownOutlined, null) : /*#__PURE__*/React.createElement(CaretRightOutlined, null)), customFoldIcon && children && isFold && /*#__PURE__*/React.createElement("div", {
    className: "n-right"
  }, isOpen ? customFoldIcon.UnFoldIcon : customFoldIcon.FoldIcon)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "".concat(spacing, "px"),
      display: isOpen ? 'block' : 'none'
    }
  }, children));
};

export default TipTitle;