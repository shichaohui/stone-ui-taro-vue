# 开发文档

## ui

[ui 目录](./ui/README.md)是组件仓库。

## demo

[demo 目录](./demo) 是组件示例项目。

## 开发流程

### 为 demo 安装本地 ui 仓库依赖

开发时在 `ui` 目录下通过 `yarn link` 提供本地连接，然后在 `demo` 项目中使用 `yarn link stone-ui-taro-vue` 安装组件仓库后即可正常开发。

### 新建组件

0. 复制 [组件模板](./ui/src/components/tmpl);
1. 在 [入口处](./ui/src/index.js) 导出组件;