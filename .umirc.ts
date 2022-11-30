/*
 * @Author: zhangyang
 * @Date: 2022-09-29 11:25
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-11-30 11:46
 * @FilePath: \nolan-ui\.umirc.ts
 * @Description: dumi配置
 */
import { defineConfig } from 'dumi';

const repo = 'nolan-ui';

export default defineConfig({
  mode: 'site',
  title: 'nolan-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  links: [
    {
      rel: 'stylesheet',
      href: '/styles/antd.min.css',
    },
  ],
  navs: [null, { title: 'GitHub', path: 'https://github.com/zlogzr/nolan-ui' }],
  devServer: {
    port: 80, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  // more config: https://d.umijs.org/config
});
