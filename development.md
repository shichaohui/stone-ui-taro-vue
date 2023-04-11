# 开发文档

## 组件库

[packages 目录](./packages/README.md)是组件仓库。

## 示例

[example 目录](./example) 是组件示例项目。


## 新建组件

1. 复制 [组件模板](./packages/components/tmpl);
2. 在 [入口处](./packages/index.js) 导出组件;

## 组件库打包发布

1. 执行 `yarn build:lib` 完成打包；
2. 执行 `sh publish.sh` 发布到 npm 仓库；
