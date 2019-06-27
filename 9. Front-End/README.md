## Front-End

### Overview

- 应用
- 目录文件组织
- Design Patterns 框架/库 + UI 框架/组件 + 框架周边工具链
- 接口 (Data APIs)
- npm，yarn (Package Managers, Dependency Managers, Modules)
- Build: Gulp, Webpack, Babel
- TypeScript

### Content/Additional Resources

#### 应用

一个应用分为后台、中台、前台，及对应的物理环境；

- 后台：数据和接口；
- 中台：平台配置、平台管理；
- 前台：用户与数据交互；

---

#### 目录文件组织

- 主要按功能或路由组织

```
+ common
- page
  + about
  + contact
  + news
  + profile
```

- 主要按文件类型组织

```
+ component
+ controller
+ service
+ common
```

---

#### Design Patterns 框架/库 + UI 框架/组件

随着 ECMAScript 的成熟，以及基于 Browser 客户端的海量互联网业务需求，前后端进行了分离，前端 Web 开发发生了巨大的变化，随之诞生了许多新的技术框架，以提升产品的开发与使用体验。

##### Design Patterns 框架/库

**应用型** Web 开发，不是传统意义上的**页面型**排版制作，而是应用系统中的客户端，如同其它应用程序，没有 MVC、MVP、MVVM 这类框架做支撑，如同刀耕火种…

- [React](https://zh-hans.reactjs.org/docs/getting-started.html)，最简单最灵活
- [Vue.js](https://cn.vuejs.org/v2/guide/)，介于“简单灵活”和“工程化”两者之间
- [Angular](https://angular.cn/)，工程化做的最好

在以往的 jQuery 开发中，我们会首先设计页面 DOM 结构，然后再复用 jQuery 来改变 DOM 结构或者实现动态交互效果。jQuery 是为** DOM 驱动**而设计的，所以对于拥有复杂交互逻辑的项目，JavaScript 代码会变得越来越臃肿；

在 MVC、MVVM 模式框架中，我们要始终在脑子里挂着 Model 的弦。不能老想着“我有×××这个DOM/页面，我要让它做×××变化”，而应该是先思考我们有或需要什么样的 Model 数据，**然后**设计我们的交互数据和交互逻辑，最后才去实现视图，并用 ViewModel 去粘合它们。

##### UI 框架/组件

基于 Design Patterns 框架和库，有许多**对应的、相关的** UI 框架和组件；

- UI Framework，提供了设计解决方案、设计指南、设计资源和丰富的组件库，是实现 Web 应用设计模式框架用户体验的视觉设计体系；
- UI Component，特定于某一需求的交互组件，如选择框、表格、树视图；
- Icon 装饰，作为 Web Font 引入项目，如 Glyphicons、Font Awesome、Ionicons、[Iconfont](https://www.iconfont.cn/)；

##### 工具链/模块

基于 Design Patterns 框架和库，有许多提供**特殊功能的** 工具链和模块；如i18n、State 管理、Router、测试等周边工具链；

---

#### 接口

- 使用 Mock Server；前后端分离，前端在不依赖后端环境的情况下并行开发；
- 使用 [Axios](https://github.com/axios/axios) AJAX 库；
- 使用现代浏览器内置的资源获取接口 [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)


- [你是如何构建 Web 前端 Mock Server 的？ - 知乎](https://www.zhihu.com/question/35436669)
- [YApi 一个可本地部署的、打通前后端及QA的、可视化的接口管理平台](https://github.com/YMFE/yapi)

---

#### npm

npm， Node.js 默认的、以 JavaScript 编写的软件包管理系统；

- 管理本地项目的依赖模块；
- 提供(全局/本地) JavaScript 工具；
- 所以依赖都在 `package.json` 文件里声明；

1. 采用 [nvm](https://github.com/creationix/nvm) 安装稳定版 NodeJS 到 `C:\nodejs\` 目录；
2. 安装 [Yarn](https://yarnpkg.com/zh-Hans/) 到 `C:\Yarn\` 目录；
3. 检查：`$ node -v` ,`$ npm -v`, `$ yarn -v`
4. 配置 `npm` 全局模块存放路径、cache 的路径

```
     $ cd \pro*\nod*
     $ md node_global node_cache
     $ npm config set prefix "C:\nodejs\node_global"
     $ npm config set cache "C:\nodejs\node_cache"
```

5. 环境变量
    - 新建`{"NODE_PATH":"C:\nodejs\node_global\node_modules"}`
    - 追加`{"Path":"C:\nodejs\node_global\"}`

6. 安装常用 [npm](https://www.npmjs.com/) 包

`$ npm install -g http-server browser-sync terminal-translate eslint gulp-cli grunt-cli`

- [npm | build amazing things](https://www.npmjs.com/)
- [从 npm 迁移 | Yarn](https://yarnpkg.com/zh-Hans/docs/migrating-from-npm)

---

#### Build: Gulp, Webpack, Babel

Design Patterns 框架和库提供了 **CLI** 脚手架，用于初始化、开发、构建和维护应用，开箱即用。

- [Create React App](https://facebook.github.io/create-react-app/)
- [Vue CLI](https://cli.vuejs.org/zh/)
- [Angular - CLI 概览与命令参考手册](https://angular.cn/cli)

不建议在 [Gulp](https://gulpjs.com/)、[Webpack](https://webpack.docschina.org/) 配置上耗废太多时间；

---

#### [TypeScript](https://www.typescriptlang.org/index.html)

JavaScript 严格超集，添加了对静态类型、经典的面向对象语言特性（如类、继承、接口、泛型和命名空间等）的支持。

### Summary

有了基础语言、扩展语言、模块化技术、图形技术、编码风格与检验、编程基础技能，再结合项目工程组织，工程化环境和脚手架，能明白 Web 应用的技术组成，能知道 Web 技术的演进，能进行 Web 项目的开发维护。

以兴趣或业务需求驱动，进行 Web 技术储备和实践。

另外，看翻译资料，要注意原官网上的版本号。

### Up Next

**Keep Learning**

### Questions?

对本系列交流进行一个总结。