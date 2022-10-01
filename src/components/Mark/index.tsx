import React from 'react';

/*
 * @Author: zhangyang
 * @Date: 2022-10-01 16:49
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-10-01 16:49
 * @FilePath: \nolan-ui\src\components\Mark\index.tsx
 * @Description: 高亮关键字组件
 */
const Mark = ({ name, keyword }: { name: string; keyword: string }) => {
  if (!keyword) {
    return <>{name}</>;
  }
  const arr = name.split(keyword);
  return (
    <>
      {arr.map((str, index) => (
        <span key={index}>
          {str}
          {index === arr.length - 1 ? null : <span style={{ color: '#257AFD' }}>{keyword}</span>}
        </span>
      ))}
    </>
  );
};

export default Mark;
