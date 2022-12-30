import STextarea from "./components/textarea/index.vue";
import SInput from "./components/input/index.vue";

export { STextarea, SInput };

const StoneUI = {
  install(App) {
    App.component("STextarea", STextarea);
    App.component("SInput", SInput);
  },
};

export default StoneUI;
