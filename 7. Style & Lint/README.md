## Style & Lint

培养良好的编码习惯，进行代码校验、风格检查，保持代码整洁、提高编码质量。

### Overview

- EditorConfig
- HTML/CSS Style Guide
- ECMAScript Style Guide
- Commit Message Guidelines
- Linter/Formatter (Code Complexity Analysis, Code Quality Testing)

### Content/Additional Resources

变量命名、Tab/Space缩进、编码工具之类，差不多是程序员的一种价值观，是计算机领域的圣战导火索，避免卷入，避免我行我素；

按项目最大的框架，遵守履行它在“风格”、“质量”方面提倡的规则和指南；

接受大厂已有的成熟的“潜规则”；

调整IDE/编辑器，使“格式化文档”、“代码质量分析”行为与“规则、指南”一致；

#### EditorConfig

[EditorConfig](https://editorconfig.org/) 为跨越各种编辑器和IDE的同一项目的多个开发人员**维护一致的编码样式**；

EditorConfig 由用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。

#### HTML/CSS

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html) / [译](http://xinlu.ink/note/Style-Guide-HTML-CSS-Google.html)

#### ECMAScript

- ECMAScript 5 -，没有构建打包工具介入，[Airbnb JavaScript Style Guide (ES5, Deprecated)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5) / [译](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md) / [译](http://xinlu.ink/note/Style-Guide-JavaScript-Airbnb(ES5).html)
- ECMAScript 6 +，[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) / [译](https://github.com/lin-123/javascript) / [译](http://xinlu.ink/note/Style-Guide-JavaScript-Airbnb.html)

#### Commit Message Guidelines

- [Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)
- [约定式提交](https://www.conventionalcommits.org/zh/v1.0.0-beta.3/)

#### Linter/Formatter (质量、颜值)

- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [Prettier · Opinionated Code Formatter](https://prettier.io/)

### Summary

编写代码时，我们要思考：

- 是否结合使用业内成熟的标准或风格指南(Style Guide)？
- 字段、变量、属性、参数、函数/方法、类的命名是否真实反映它们所代表的事物？
- 能否通过阅读代码理解它在做什么？
- 新写代码是否可重用已有代码？
- 是否有相关的文档、注释、测试用例？
- 位置、作用域是否正确？
- 是否实现需求？

**Done Is Better Than Perfect.**

### Questions?

您是如何控制代码格式和代码质量的？