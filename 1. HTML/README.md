## 结构/HTML: Hypertext Markup Language

### Overview

- 语义/Semantics
- 结构/Structure
- Microdata, RDFa, JSON-LD
- 模板/Template

### Content

#### Syntax

![Css Declaration](./assets/html-syntax.svg)

#### 语义/Semantics

语义化概念：通过丰富的语义关系对数据进行逻辑化描述，便于数据人机可读、检索挖掘和共享交换，实现信息处理的自动化和智能化；即人类提供良好结构的、作为人能识别的数据给机器，让不同机器能准确高效的意会和处理数据反馈给人类。

语义化排版文档信息，构建语义明确、结构清晰的文档，便于浏览器解析渲染、搜索引擎建立索引抓取页面，提升内容的交互性、可读性和可维护性，视觉呈现上即使没有引入样式，人还是能“愉快”的阅读主体内容，如标题就是标题、段落就是段落、列表就列表…

可以遵循 [RDF(Resource Description Framework)](https://www.w3.org/RDF/)、[RDFa](https://www.w3.org/TR/rdfa-lite/)、[Microformats](http://microformats.org/wiki/Main_Page)、 [Microdata](https://www.w3.org/TR/microdata/)等规范，更为丰富地描述和表达网络资源的内容与结构。

#### 结构/Structure

根据文档特征，在[HTML 4.01](https://www.w3.org/TR/html401/)规范中定义了大量的语义标签，如[文本](https://www.w3.org/TR/html401/struct/text.html)、[列表](https://www.w3.org/TR/html401/struct/lists.html)、[表格](https://www.w3.org/TR/html401/struct/tables.html)、[链接](https://www.w3.org/TR/html401/struct/links.html)、[媒体对象](https://www.w3.org/TR/html401/struct/objects.html)、[表单](https://www.w3.org/TR/html401/interact/forms.html)等范畴下的标签元素；在[HTML 5](https://www.w3.org/TR/html52/)中更为详细的规范化了文档特征，添加了新的标签元素用以更明确的定义和描述文档的结构，并且对所有元素按 Metadata、Flow、Sectioning、Heading、Phrasing、Embedded、Interactive 等属性重新定义了分类规则。

<object data="./assets/pro-web-reconstruction-content-venn.svg" width="1000" height="288"><img alt="" src="./assets/pro-web-reconstruction-content-venn.png" width="512" height="288"></object>

#### 模板/Template

采用模板，将用户界面与业务数据分离，通过模板语言逻辑控制、解析引擎，输出 Web 结构，有 [Mustache](https://mustache.github.io/), [Handlebars](http://handlebarsjs.com/), [EJS](https://ejs.co/), [Jade](http://jade-lang.com/), [Haml](http://haml.info/), [Pug](https://github.com/pugjs/pug) 等模板技术方案；

另外，支持视图、数据绑定的 MV* 框架，有内部的模板实现，以适应数据的依赖、数据的变化。

#### 属性/Attribute

HTML 元素可以通过配置属性调整元素的行为，如 `class`, `title`, `data-*` 等属性。

### Summary

HTML 结构化、逻辑化内容，开发者要合理使用语义标签，分明**层次嵌套**、清晰**标签职责**。

### Additional Resources

- [HTML5 标签列表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
- [HTML 元素参考，包括 HTML5 中不再有效的元素 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
- [HTML 属性参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes)
- [data-* 自定义数据属性 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)

### Up Next

- [HTML5 技术集 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)
- [HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
- [MedicalCause - schema.org](https://schema.org/MedicalCause)
- [Character Entity Reference Chart](https://dev.w3.org/html5/html-author/charref)
- [语种名称代码](http://www.ruanyifeng.com/blog/2008/02/codes_for_language_names.html)

### Questions?

1. 一个页面，有头部导航、侧边菜单、主要区域、尾部版权等区域，如何排版？