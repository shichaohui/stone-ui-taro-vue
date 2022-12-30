import { appPagePathList } from "./app-pages";

export default defineAppConfig({
  pages: appPagePathList,
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
