import { createApp } from "vue";
import App from "../App.vue";
import createRouter from "../router";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const app = createApp(App);
const router = createRouter(createWebHistory());
const pinia = createPinia();
app.use(router);
app.use(pinia);
//等待路由加载好后挂载
router.isReady().then(() => {
  app.mount("#app");
});
