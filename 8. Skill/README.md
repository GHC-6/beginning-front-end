## Skill

### Overview

- Emmet
- Editor
- Chrome DevTools
- JSON Viewer (Data Formats)
- Document，Markdown
- Screenshot
- Git，内容管理系统/Content Management Systems
- 标注
- Tampermonkey


### Content/Additional Resources

Coding 周边。

#### Emmet

编辑器插件，类似代码片段，根据简写规则和编辑功能，提升编写和编辑速度。

- [Abbreviations Syntax](https://docs.emmet.io/abbreviations/syntax/)
- [Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

#### Editor

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [WebStorm: The Smartest JavaScript IDE by JetBrains](https://www.jetbrains.com/webstorm/)

如果是编辑器，需要：

- 扩展/插件
- 配置
- 快捷键
- 备份

具体的参阅[关于编辑器](http://xinlu.ink/tech/editor.html)。

#### Chrome DevTools

目前是没有之一的便捷开发者调试工具。

#### JSON Viewer (Data Formats)

需要浏览器能打开和解析一个JSON文件，而不是临时百度一下...

Firefox 原生支持；

Chrome 安装 [JSON Viewer Awesome - Chrome 网上应用店](https://chrome.google.com/webstore/detail/json-viewer-awesome/iemadiahhbebdklepanmkjenfdebfpfe)

#### Document，Markdown

写技术文档建议用 Markdown，轻量级文档**结构化标记**语言，Git 服务器可自动渲染 Markdown 文件，不像 富文本HTML编辑器、`.docx`、 `.pdf` 结构很“脏”还依赖专有软件。

[Visual Studio Code](https://code.visualstudio.com/) 可安装扩展 [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/)，便于编写、查阅、导出。


```javascript
/**
 * 数组排序，非 ASCII 字符排序
 *
 * @param {string} order - 排序规则 'asc'* | 'desc'
 * 只能是 String 类型值比较，String.prototype.localeCompare()
 */
function compareByLocale(order = 'asc') {
  return (value1, value2) => {
    let comparison = value1.localeCompare(value2);

    return order === 'desc' ? comparison * -1 : comparison;
  };
}
```

- 语法
    - [Cheat Sheet | Markdown Guide](https://www.markdownguide.org/cheat-sheet)
    - [Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax)
    - [Extended Syntax | Markdown Guide](https://www.markdownguide.org/extended-syntax)
- 浏览器拷贝支持
    - [Copycat](https://github.com/BlackGlory/Copycat)

#### Screenshot

友好的截图，并能贴在屏幕上，如反馈问题，如来回切换对比操作；

- [Snipaste](https://docs.snipaste.com/zh-cn/)

#### Git，内容管理系统/Content Management Systems

- 在线
    - [GitHub](https://github.com/)
    - [GitLab](https://about.gitlab.com/)
    - [Bitbucket](https://bitbucket.org/)
    - [Coding](https://coding.net/)
- 自已搭
    - [Gogs](https://github.com/gogs/gogs)
    - [Gitea](https://github.com/go-gitea/gitea)
- 客户端
    - [Git - GUI Clients](https://git-scm.com/download/gui/win)
    - 建议用 [Git Bash](https://git-scm.com/)

#### 标注

对设计稿件进行标注；

- [蓝湖 - 高效的产品设计协作平台](https://lanhuapp.com/)
- [Zeplin](https://zeplin.io/)

#### Tampermonkey

浏览器扩展，安装或编写 JavaScript 对 Web 进行定制；

**有风险**；

### Summary

能较高效的编码、调试、反馈；

能较友好的编写、查阅技术文档。

### Questions?

尝试用 Markdown 编写一份文档。
