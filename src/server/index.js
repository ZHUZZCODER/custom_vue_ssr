const express = require("express");
const app = express();
import createApp from "../app";
import { renderToString } from "@vue/server-renderer";
import createRouter from "../router";
// 内存路由-> node用
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";
//部署静态资源
app.use(express.static("dist"));
app.get("/*", async (req, res) => {
  //拿到客户端app转成string
  const app = createApp();

  //创建路由
  const router = createRouter(createMemoryHistory());
  app.use(router);
  await router.push(req.url || "/");
  await router.isReady();
  //创建store
  const pinia = createPinia();
  app.use(pinia);
  //将静态html返回
  const appStringHtml = await renderToString(app);
  res.send(
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <h1>Vue3 Serve Side Render</h1>
          <div id="app">
            ${appStringHtml}
          </div>
          <script src="/client/client_bundle.js"></script>
        </body>
        </html>
        `
  );
});

app.listen(8000, () => {
  console.log("start server success ~");
});
