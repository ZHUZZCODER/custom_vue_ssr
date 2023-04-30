import { createSSRApp } from "vue";
import App from "./App.vue";

//通过createSSRApp将app导出
export default function createApp() {
  const app = createSSRApp(App);
  return app;
}
