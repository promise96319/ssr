# SSR

## 简版

- 根据路径，读取 React 组件
- 拉取数据，将 React 组件渲染成 HTML 字符串
- 打包 client.js，将 HTML 字符串和 client.js 一起返回给浏览器
- 浏览器端进行 hydrate 操作

## 需要解决的问题

- 数据获取（static init data）
- 文件路由（提前读取生成）
- 路由跳转（remix react-router）
- 流式渲染（）
- 孤岛

## 技术点

- react-router 实现？
- 流式渲染实现？
- hydrate 实现？
