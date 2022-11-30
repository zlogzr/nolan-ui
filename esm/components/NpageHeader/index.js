import React from 'react';
import "./style.less";

var NPageHeader = function NPageHeader(props) {
  var title = props.title,
      extra = props.extra,
      children = props.children,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return /*#__PURE__*/React.createElement("div", {
    className: "n-page-common-header-box",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "n-page-name"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, title), extra && /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, extra)), children && /*#__PURE__*/React.createElement("div", {
    className: "n-page-content"
  }, children));
};

export default NPageHeader;