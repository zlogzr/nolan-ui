import React from 'react';
/*
 * @Author: zhangyang
 * @Date: 2022-10-01 16:49
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:49
 * @FilePath: \nolan-ui\src\components\Mark\index.tsx
 * @Description: 高亮关键字组件
 */

var Mark = function Mark(_ref) {
  var name = _ref.name,
      keyword = _ref.keyword;

  if (!keyword) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, name);
  }

  var arr = name.split(keyword);
  return /*#__PURE__*/React.createElement(React.Fragment, null, arr.map(function (str, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: index
    }, str, index === arr.length - 1 ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#257AFD'
      }
    }, keyword));
  }));
};

export default Mark;