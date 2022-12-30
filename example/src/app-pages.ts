/**
 * 应用页面枚举
 */
export enum AppPage {
  Home = "/pages/home/index",
  Textarea = "/pages/textarea/index",
  Input = "/pages/input/index",
}

/**
 * 应用页面路径数组
 */
export const appPagePathList = Object.values(AppPage).map((item) =>
  item.replace(/^\//, "")
);
