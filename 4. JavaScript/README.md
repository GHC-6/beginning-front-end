## JavaScript

### Overview

- Syntax：ECMAScript 5 -，ECMAScript 6 +
- this
- 状态提升、事件、函数调用、原型/Hoisting，Event，Prototyping
- 基本 DOM 操作/DOM Manipulation
- AJAX(XHR/Fetch，axios, jQuery.ajax)
- Async
- BOM

### Content

#### ECMAScript 5 -，ECMAScript 6 +

- 语言核心：语法，关键字、保留字，变量，数据类型，操作符、语句、函数、作用域、基本类型、引用类型
- 严格模式：
    + `"use strict";`，严谨，显式抛出异常；
    + 禁止 this 关键字指向全局对象；ECMAScript 6 中顶层 `this` 指向 `undefined`；
    + 模块和类默认严格模式；
    + 变量必须声明后再使用；

#### 作用域、状态提升(Hoisting)

执行环境有全局执行环境和函数执行环境之分；

每次进入一个新执行环境，都会创建一个用于搜索变量和函数的作用域链（scope chain）；

内部环境可以通过作用域链访问所有外部环境；

1. 在函数作用域或全局作用域中通过关键字 `var` 声明的变量，在编译阶段放入内存时会提升到作用域顶部，初始化操作依旧在原处执行；

2. **非严格模式**，提升至外围函数或全局作用域的顶部；**严格模式**，块级函数提升至块的顶部，let 定义的函数表达式不会被提升()；

3. 块级作用域绑定的 `let` 和 `const` 为 JavaScript 引入了词法作用域，它们声明的变量不会提升，以强化对变量生命周期的控制；在声明前访问块级绑定会导致错误，因为绑定还在**临时死区**(TDZ，Temporal Distortion Zone)；

4. 当前使用块级绑定的最佳实践是：默认使用 `const`，实现对变量的保护；只在确定需要改变变量的**值**时使用 `let`；

5. `const` 声明的常量必须进行初始化；声明的基本类型(Primitive value)不可再赋值，声明的引用类型(Reference value)不允许修改**绑定**，但允许修改绑定的值；即：变量指向的内存地址(指针)不得改动；

6. `for-in` 和 `for-of` 循环中， `let` 和 `const` 都会每次迭代时**创建**新绑定，从而使循环体内创建的函数可以访问到相应迭代的值；而非像使用 `var` 那样提升后，是最后一次迭代后的值；

7. 在 `for` 循环中使用 `const` 声明则引发错误；

8. 在声明前访问块级绑定会导致错误，因为绑定还在临时死区(TDZ，Temporal Distortion Zone)；


#### 事件

- 事件名，事件类型
- 事件处理：HTML 事件处理、DOM0 级事件处理、DOM2 级事件处理 `addEventListener/removeEventListener`
- 事件流：事件捕获(Event Capturing)阶段，处于目标阶段，**事件冒泡**(Event Bubbing)阶段
- 事件对象，`event.preventDefault()/event.stopPropagation()`
- 事件委托/Event Delegation，`event.target`
- 指向事件**触发**的元素(动)：`event.target`，当事件处理程序在事件的冒泡或捕获阶段被调用时，引用不同的对象；
- 指向事件**绑定**的元素(静)：`event.currentTarget`

#### 函数的调用

普通的函数调用触发函数的 `[[Call]]` 方法调用；执行函数体本身；

通过 new 关键字调用函数触发函数的 `[[Construct]]` 方法调用；创建一个**实例**对象；

`new.target` 元属性(metaproperty)可检测函数是通过何种方式调用；

#### 原型

创建了自定义的构造函数后，其原型对象 `prototype` 默认只会取得 `constructor` 属性，至于其他方法则都是从 `Object` 继承而来；

当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性）`[[Prototype]]`，指向构造函数的原型对象；

这个**指针**存在于**实例**与构造函数的**原型对象**之间，而不是存在于实例与构造函数之间。

原型对象可采用构造函数模式实现，构造函数都有一个 `prototype` 属性指向另一个包含属性和方法对象，此对象会被构造函数的**实例**继承。

#### this

隐式的传递上下文 `context` 供函数调用对象上的属性和方法；

确定 `this` ，要看函数是谁执行，怎么执行(`apply`/`call`/`bind`)；

`func.call(context, param)`

`fn(param)` = `fn.call(undefined, param)`

`foo.bar.fn(param)` = `foo.bar.fn.call(foo.bar, param)`

`handler.call(event.currentTarget, event)`

#### 垃圾收集

标记清除（mark-and-sweep），变量进入环境，标记为“进入环境”，变量离开环境，标记为“离开环境”。

#### 闭包

词法闭包(Lexical Closure)/函数闭包（Function Closures）

在函数中（嵌套）定义另一个函数时，如果内部的函数引用了外部的函数的变量，则产生闭包。

引用的变量称作上值(upvalue)。

```javascript
function compare (propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName]
    var value2 = object2[propertyName]

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

var fn = compare('name') // 还在访问 compare 的 propertyName

var result = fn({name: 'foo'}, {name: 'quxz'}) // -1
```

#### 纯函数

纯函数(pure function)，不依赖、不改变它作用域之外的变量的状态，返回值由调用时的参数决定；

#### XHR (XMLHttpRequest)

```javascript
function makeAjaxCall(url, methodType, callback){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           console.log("xhr done successfully");
           var resp = xhr.responseText;
           var respJson = JSON.parse(resp);
           callback(respJson);
        } else {
           console.log("xhr failed");
        }
     } else {
        console.log("xhr processing going on");
     }
   }
   console.log("request sent succesfully");
}
```

```javascript
document.getElementById("userDetails").addEventListener("click", function(){
 var userId = document.getElementById("userId").value;
 var URL = "https://api.github.com/users/"+userId;
 makeAjaxCall(URL, "GET", processUserDetailsResponse);
});

document.getElementById("repoList").addEventListener("click", function(){
 var userId = document.getElementById("userId").value;
 var URL = "https://api.github.com/users/"+userId+"/repos";
 makeAjaxCall(URL, "GET", processRepoListResponse);
});

function processUserDetailsResponse(userData){
 console.log("render user details", userData);
}

function processRepoListResponse(repoList){
 console.log("render repo list", repoList);
}
```

#### Promise

```javascript
function makeAjaxCall(url, methodType){
   var promiseObj = new Promise(function(resolve, reject){ // Create Promise object
      var xhr = new XMLHttpRequest(); // Add ajax
      xhr.open(methodType, url, true);
      xhr.send();
      xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
         if (xhr.status === 200){
            console.log("xhr done successfully");
            var resp = xhr.responseText;
            var respJson = JSON.parse(resp);
            resolve(respJson); // on success, call fullfill method, to resolve
         } else {
            reject(xhr.status); // on error, call reject method, to reject
            console.log("xhr failed");
         }
      } else {
         console.log("xhr processing going on");
      }
   }
   console.log("request sent succesfully");
 });
 return promiseObj; // Returns Promise object
}
```

```javascript
document.getElementById("userDetails").addEventListener("click", function(){
 var userId = document.getElementById("userId").value;
 var URL = "https://api.github.com/users/"+userId;
 makeAjaxCall(URL, "GET").then(processUserDetailsResponse, errorHandler);
});

document.getElementById("repoList").addEventListener("click", function(){
 var userId = document.getElementById("userId").value;
 var URL = "https://api.github.com/users/"+userId+"/repos";
 makeAjaxCall(URL, "GET").then(processRepoListResponse, errorHandler);
});

function processUserDetailsResponse(userData){
 console.log("render user details", userData);
}

function processRepoListResponse(repoList){
 console.log("render repo list", repoList);
}

function errorHandler(statusCode){
 console.log("failed with status", status);
}
```

### Additional Resources

动手，不取巧，不贪婪，不追框架，一点一点、一步一步来

- [JavaScript 教程 - 阮一峰](https://github.com/wangdoc/javascript-tutorial)
- [ECMAScript 6 入门 - 阮一峰](http://es6.ruanyifeng.com/)
- [JavaScript 秘密花园](http://bonsaiden.github.io/JavaScript-Garden/zh/)
- [JavaScript教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/1022910821149312)

#### 系统性学习

- 入门 ES5：[《JavaScript 高级程序设计（第3版） Professional JavaScript for Web Developers 3rd Edition》](https://item.jd.com/10951037.html)(第1-7章、第13、17章、第20-24章)
- 入门 DOM：[《JavaScript DOM编程艺术（第2版）》](https://item.jd.com/10603153.html)(第3-10章)
- 入门 ES6：[《深入理解 ES6》](https://item.jd.com/12213616.html)/[《ES6 标准入门 (第3版)》](https://item.jd.com/12172449.html)

### Up Next

- 进阶：[高性能 JavaScript](https://item.jd.com/11755693.html)
- 拓展：[你不知道的 JavaScript](https://item.jd.com/12288843.html)
- 拓展：[JavaScript语言精粹](https://item.jd.com/11090963.html)

### Questions?

- 基本类型有哪些？(基本知识点就是基本类型实例的操作，如字符截取之类的)
- 引用类型有哪些？(基本知识点就是引用类型实例的操作，如数组的各种操作)