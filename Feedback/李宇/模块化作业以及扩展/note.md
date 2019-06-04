#模块化笔记
## node 导入导出

### 导出 模块中的变量，函数
```
// profile.js
export { firstName, lastName, year, foo as f };
var firstName = 'Frank';
var lastName = 'Li';
var year = 2019;

function foo(){
    console.log('foo');
}
//导出类
export class Plane{
    constructor(name){
        this.name = name;
    }
    fly(){
        console.log(this.name+‘起飞‘);
    }
}
export default '我是默认导出'
```
### 导入模块
```
import { firstName, lastName, year, f } from './profile.js';
console.log(firstName)
```

## 阶段小结
- 1 一个变量、函数、类只能被导出一次。

- 2 一个脚本最多只能有一个默认导出语句。

- 3 所有浏览器都不支持导入、导出语法。需要借助babel、webpack等。

***
# 工程化扩展

### 检查  node 支持的 ES6 语法
``` 
npm install -g es-checker 
```

## 使用 webpack 打包
```
mkdir webpack-frank
cd webpack-frank
npm init
npm install webpack --save-dev
call ./node_modules/.bin/webpack importprofile.js importprofile.bundle.js
```

## 使用 配置文件 进行 webpack 打包
### 预备步骤
#### 先构造项目大体结构出来
```
mkdir webpack-frank
cd webpack-frank
npm init
npm install webpack --save-dev
```
#### 接着为项目 分类创建文件目录
- webpack-frank 目录下新建src目录，所有的源码都放在这里，在src目录下，分别新建script目录和 style 目录用来存放 js文件和 css 文件。
- webpack-frank 目录下新建dist目录，作为打包以后的输出文件的存放目录。
- webpack-frank 目录下新建index.html文件，用script标签引入dist/bundle.js文件。 (这一步暂时可以省略)
- webpack-frank 目录下新建webpack.config.js作为配置文件。(这个是 webpack 执行时候的配置文件)
```
var path = require('path')                                      //引入path

module.exports = {                                              //注意这里是exports不是export
  entry: './src/script/importprofile.js',                                 //入口文件
  output: {                                                       //输出文件
    path: path.resolve(__dirname,'dist'),                      //输出文件的目录
    filename: 'bundle.js'                                        //输出文件的名称
  }
}
```
- 添加 "build" : "webpack" 到 package.json 的 script 下，可以省去打包输入一长串命令的麻烦(npm build 替代 ./node_modules/.bin/webpack  ) (这个是 node 执行命令时候的配置文件)

## 延伸
### 如果需要使用另外的配置进行 webpack 打包 则使用下面命令即可
```
./node_modules/.bin --config webpack.dev.config.js 
```
### 如果嫌弃打包后的 bundle.js 文件太大可以 在打包过程中加入 -p 参数
```
./node_modules/.bin/webpack -p这个命令 -p就是出版的意思，这样它就会自动压缩
```
### 其他参数
```
./node_modules/.bin/webpack --progress --display-modules --display-reason --colors  //看到过程、显示模块、显示打包原因、看到颜色变化
```
### 多页面打包如何配置 webpack.config.js
#### 我们需要用到下面的插件 并修改 webpack.config.js 文件内容
```
npm install html-webpack-plugin --save-dev
// 修改 webpack.config.js 内容
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')                //Common.js语法引入插件

module.exports = {             //注意这里是exports不是export
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name]-[hash]-bundle.js'
  },
  plugins: [                                             //使用插件
    new HtmlWebpackPlugin({                              //因为要生成两个不同的html文件，所以要new两次
      filename: 'index.html',                                //filename指定生成html文件名
      template: 'index.html',                               //template指定打包参照的模板
      chunks: ['main']                    //chunks参数指定要把哪个入口文件打包后嵌入到HTML里，可以是一个也可以是多个
    }),
    new HtmlWebpackPlugin({
      filename: 'a.html',
      template: 'a.html',
      chunks: ['a']
    })
  ]
}
```
#### 安装对应的 loader 对 CSS/SASS/LESS/PNG/JPG/JPEG 等静态资源进行打包 (这部分等有时间需要研究下)
```
npm install --save-dev babel-loader babel-core babel-preset-es2015  //这是将es6转换为es5所必须的
npm install --save-dev postcss-loader css-loader style-loader autoprefixer cssnano    //安装相应loader和插件
npm install --save-dev less less-loader    //安装less和less-loader
npm install --save-dev sass sass-loader  //安装sass和sass-loader
npm install --save-dev file-loader url-loader
```
### 最后的 server 和  watch 也需要去阅读

## 总结，最后发现这些外部的都还只是工程化的工具(为了构建复杂项目便利)，真正需要熟练掌握的仍然还是 ES6 语法 + CSS3 + HTML5 





