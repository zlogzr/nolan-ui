var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * @Author: zhangyang
 * @Date: 2022-09-30 16:46
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:04
 * @FilePath: \nolan-ui\src\components\NRow\index.tsx
 * @Description: 行展示组件
 */
import styled from 'styled-components';
var ARow = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  margin-bottom: ", ";\n  > * {\n    margin-top: 0 !important;\n    margin-right: ", ";\n    margin-bottom: 0 !important;\n  }\n"])), function (props) {
  return props.between ? 'space-between' : undefined;
}, function (props) {
  return props.marginBottom ? "".concat(props.marginBottom, "px") : 0;
}, function (props) {
  return props.gap ? "".concat(props.gap, "px") : '12px';
});
export default ARow;