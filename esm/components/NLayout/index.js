import { Layout } from 'antd';
import React from 'react';
import "./style.less";
var Header = Layout.Header,
    Content = Layout.Content,
    Sider = Layout.Sider;

var NLayout = function NLayout(props) {
  var header = props.header,
      sider = props.sider,
      content = props.content;
  return /*#__PURE__*/React.createElement(Layout, {
    className: "n-layout"
  }, /*#__PURE__*/React.createElement(Header, {
    className: "n-header"
  }, header), /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Sider, {
    className: "n-sider",
    theme: "light",
    breakpoint: "lg",
    collapsible: true
  }, sider), /*#__PURE__*/React.createElement(Content, {
    className: "n-content"
  }, content)));
};

export default NLayout;