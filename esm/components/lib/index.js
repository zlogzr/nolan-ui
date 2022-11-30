var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * @Author: zhangyang
 * @Date: 2022-10-01 16:14
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:31
 * @FilePath: \nolan-ui\src\components\lib\index.tsx
 * @Description: 小组件库
 */
import React from 'react';
import { Spin, Typography } from 'antd';
import styled from 'styled-components'; // 类型守卫

var isError = function isError(value) {
  return value === null || value === void 0 ? void 0 : value.message;
}; // 错误提示组件


export var ErrorBox = function ErrorBox(_ref) {
  var error = _ref.error;

  if (isError(error)) {
    return /*#__PURE__*/React.createElement(Typography.Text, {
      type: 'danger'
    }, error === null || error === void 0 ? void 0 : error.message);
  }

  return null;
};
/* 全局样式组件 */

var FullPage = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
/* 路由切换 */

export var FullPageLoading = function FullPageLoading() {
  return /*#__PURE__*/React.createElement(FullPage, null, /*#__PURE__*/React.createElement(Spin, {
    size: 'large'
  }));
};
/* 全局错误 */

export var FullPageErrorFallback = function FullPageErrorFallback(_ref2) {
  var error = _ref2.error;
  return /*#__PURE__*/React.createElement(FullPage, null, /*#__PURE__*/React.createElement(ErrorBox, {
    error: error
  }));
};