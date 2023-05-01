# custom_vue_ssr
将原本用vue搭建的项目，转成ssr

## 为什么有了这个项目？

虽然vue的next完全可以做到ssr,但是我们能不能把原本spa的开发的应用转换成ssr。减少去做二次开发的成本。这样也有助于对ssr有更深入的了解。

## 什么是ssr?

服务端渲染全称是：Server Side Render，在服务器渲染页面，并将渲染好HTML返回给浏览器呈现。

## ssr的优缺点

### ssr优点：

- 更快的首屏渲染速度：

浏览器显示静态页面的内容要比js动态生成的内容快得多。当用户访问首页时可立即返回静态页面内容，而不需要等待浏览器先加载完整个应用程序。

- 更好的SEO:

爬虫是最擅长爬取静态的HTML页面，服务器端直接返回一个静态的HTML给浏览器。这样有利于爬虫快速抓取网易内容，并编入索引，有利于SEO。

### srr缺点：

- ssr通常需要对服务器进行更多的API调用，以及在服务器渲染需要消耗更多的服务器资源（每个用户访问都需要拆改创建一个新的实例，以防止全局状态五日），成本高。
- 增加了一定的开发成本，用户需要关心哪些代码是运行在服务端，哪些代码是运行在浏览器端。
- ssr配置站点的缓存通常会比spa站点要复杂一点。

## ssr解决方案：

1. React: Next.js
2. Vue: vue3 --- Nuxt3 , vue2 --- nuxt.js
3. Angular：Angluar Universal

## ssr应用场景：

- SaSS产品，如：电子邮件网站、在线游戏、客户关系管理系统、采购系统等
- 门户网站、电子商务、零售网站

- 单个页面、静态网站、文档类网站...

## 项目实现原理：

![](C:\Users\23376\Desktop\ssr.png)

express通过spa的createSSRApp获取到app实例，然后通过renderToString将app转换为静态html。打包前端js代码，通过script方式引入。当用户访问node服务器时，服务器返回静态的html。浏览器解析到script标签下载js，动态修改页面。

## 项目环境依赖：

express、nodemon、vue、vue-loader、bable-loader、@babel/preset-env、webpack、webpack-cli、webpack-merge、webpack-node-externals、vue-router、pinia

## 如何打包运行？

### 打包客户端：npm run build:client

### 打包服务器端：npm run build:server

### 运行：npm run start
