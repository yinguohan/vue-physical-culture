import { createApp } from "vue";
import "@/assets/styles/tailwindcss.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn"; //解决elementpLus一些组件是英文的问题
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
