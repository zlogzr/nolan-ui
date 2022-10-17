---
title: downloadFile
group:
  title: 通用
  path: /common
  order: 1
---

# downloadFile 下载文件

## 何时使用

需要从远程下载文件时使用，携带 token

```js
import { downloadFile } from '@/utils';
```

## 代码展示

- 携带 token 的下载文件方法

```ts
/**
 * @description 点击下载文件
 * 通过 a标签 下载文件 鉴权token
 * url 下载路径
 */

export function downloadFile(url: string) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  // 设置请求头参数的方式,如果没有可忽略此行代码
  xhr.setRequestHeader('Authorization', theAuth.accountInfo.token?.access || '');
  // 设置响应类型为 blob   xhr.open必须为 异步
  xhr.responseType = 'blob';
  // 关键部分
  xhr.onload = function (e) {
    // 如果请求执行成功
    if (this.status == 200) {
      const blob = this.response; // blob 存储大量的二进制数据
      const a = document.createElement('a');
      const newUrl = window.URL.createObjectURL(blob); // 转换可直接放入a标签href
      a.href = newUrl;
      // 设置文件名
      const filename = decodeURIComponent(
        // @ts-ignore
        xhr.getResponseHeader('content-disposition').split(';')[1].split('filename=')[1],
      );
      a.download = filename;
      document.body.appendChild(a); // 火狐浏览器 必须把元素插入body中
      a.click();
      document.body.removeChild(a);
      // 释放之前创建的URL对象
      window.URL.revokeObjectURL(newUrl);
    } else {
      // 失败后需要将blob对象转换为 json 来获取异常信息
      const reader = new FileReader();
      reader.readAsText(this.response, 'utf-8');
      reader.onload = () => {
        // @ts-ignore
        const { header } = JSON.parse(reader.result);
        console.error(header.msg);
      };
    }
  };
  xhr.send();
}
```

- 不需要携带 token 的下载文件方法

```ts
/*
 * 下载文件
 * 通过自动触发表单提交来实现
 */
export function downloadFile(url: string) {
  const $form = document.createElement('form');
  $form.setAttribute('method', 'GET');
  $form.setAttribute('action', url);
  document.body.appendChild($form);
  // 自动触发表单提交
  $form.submit();
  document.body.removeChild($form);
}
```
