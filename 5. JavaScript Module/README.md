# JavaScript 模块化

可查看文末【扩展阅读】部分, 大概知道模块化的历史演变, 较深入全面了解各种模块化方案, 仅限了解, 因为现在开发都是采用本文第 8 条。

## 1. 早期代码

全局命名空间污染; 页面内嵌脚本还存在缺乏代码可重用性问题。

```javascript
function foo(){
    // do something
}

var bar = function(){
    // do something
};
```

---

## 2. 对象 Namespace 模式

命名空间模式, 减少了全局环境中的变量数;

但外部对内部封闭模块的属性或方法可以进行修改, 存在隐患;

```javascript
var myApp = {
    foo: function(){
        // do something
    },
    bar: function(){
        // do something
    }
}
```

```javascript
myApp.foo();
```

---

## 3. 匿名函数闭包, IIFE模块模式

被依赖的脚本须出现在依赖脚本之前, 按正确的依赖关系顺序来加载文件;

```javascript
var Module = (function($){

    // 私有变量
    var _privateVariables = "";

    // 私有方法
    function _privateMethod() {
        // do something
    }

    // 特权方法
    var foo = function(){
        // do something
    };

    // 导出接口
    return {
        // 暴露对外接口, 接口清晰
        foo: foo
    };
}(jQuery));
```

```javascript
Module.foo();
Module._private; // undefined, 不能访问
```

1, 2, 3 方案，**都需要手动控制文件加载顺序, 缺乏依赖解析, 项目增长代码难以维护;**

---

## 4. CommonJS 规范/Node

[CommonJS](http://javascript.ruanyifeng.com/nodejs/module.html)规范加载模块是同步(Synchronously)阻塞式的，加载完成，才能执行后面的操作, 适合服务器/本地环境;

- 导出模块 `module.exports`
- 导入模块 `require`

```javascript
// example.js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

```javascript
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

---

## 5. AMD 规范/RequireJS

[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88))异步加载模块规范, 允许指定回调函数, 适用于浏览器环境;

[RequireJS](http://requirejs.org/)加载器, 基于文件的依赖管理:

定义模块: `define(id?, dependencies?, factory)`;

调用模块: `require([dependencies], function(){})`;

```javascript
// AMD Style
// foo.js
define(
    ['dependency1', 'dependency2'], // 依赖前置，提前执行
    function(dependency1, dependency2){ // 回调在依赖加载后执行

      var foo = function (){
          // do something
      };

      return {
          foo: foo
      };
});
```

```javascript
// CommonJS Style
// bar.js
define(function (require) {
    var dependency1 = require('dependency1'),
        dependency2 = require('dependency2');

    var bar = function (){
        // do something
    };

    return {
        bar: bar
    };
});
```

```javascript
require(['jquery', 'underscore', 'backbone', 'foo', 'bar'], function ($, _, Backbone, foo, bar){
  // do something
  var myFoo = foo();
});
```

---

## 6. CMD 规范/[SeaJS](https://seajs.github.io/seajs/docs/#intro)

通过define(id?, dependencies?, factory)定义模块

```javascript
// CommonJS Style
define(function(require, exports, module) {
    var $ = require('jquery');
    var foo = require('./foo');
    foo.doSomething();

    var bar = require("./bar");
    bar.doSomething(); // 依赖就近，延迟执行

    exports.other = 'other';
    exports.doSomething = function() {};
});
```


---

## 7. UMD 规范

通用模块规范, 对AMD和CommonJS规范的整合, 在浏览器端、服务端运行;

```javascript

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function($) {
    // 方法
    function myFunc() {};
    // 暴露公共方法
    return myFunc;
}));
```

4, 5, 6, 7 方案, 解决了**依赖解析**和**全局作用域污染**问题, 如未采用合并机制，异步加载各文件存在 HTTP 性能问题;

---

## 8. ES6 Modules 规范/Browserify/Babel/WebPack/Rollup

使用 ES6 标准模块语法, 通过打包工具将源代码转换成浏览器兼容的生产代码。

```javascript
// lib/counter.js
// 导出模块
export let counter = 1;

export function increment() {
  counter++;
}

export function decrement() {
  counter--;
}
```

```javascript
// src/main.js
// 导入模块, from 自一个脚本文件
import * as counter from 'lib/counter';
```

8 方案中 ES6+，Babel，WebPack, 目前前端开发通用方案, 为**作用域、依赖解析、加载顺序、打包发布**等提供解决方案, 模块化开发。

---

无论何种方案，生产环境，需要对源码进行合并(Concat)、压缩(Minify)、混淆(Uglify)、文件版本控制(Hash)等打包操作;

---

## 扩展阅读

- [JavaScript 模块化七日谈](https://huangxuan.me/2015/07/09/js-module-7day/)
- [Module 的语法 - ECMAScript 6入门](http://es6.ruanyifeng.com/#docs/module#export-%E5%91%BD%E4%BB%A4)
- [Module 的加载实现 - ECMAScript 6入门](http://es6.ruanyifeng.com/#docs/module-loader)

## Questions?

采用 ECMAScript 6 模块如何导出导入？

