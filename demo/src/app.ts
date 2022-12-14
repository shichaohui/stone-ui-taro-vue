import { createApp } from "vue";
import StoneUI from "stone-ui-taro-vue";
import "./app.less";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(StoneUI);

export default App;
