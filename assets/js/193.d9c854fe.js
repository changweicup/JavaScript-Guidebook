(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{629:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"element-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Element 类型")]),t._v(" "),s("p",[t._v("除了 Document 类型之外，Element 类型就要算是 Web编程中最常用的类型了。Element 类型用于表现XML或HTML元素，提供了对元素标签名、子节点及特性的访问。")]),t._v(" "),s("p",[t._v("要访问元素的标签名，可以使用 "),s("code",[t._v("nodeName")]),t._v(" 属性，也可以使用 "),s("code",[t._v("tagName")]),t._v(" 属性，这两个属性会返回相同的值（使用后者主要是为了清晰起见）。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("myDiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可以像下面这样取得这个元素及其标签名")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myDiv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'DIV'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("noadeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("在 HTML，标签名始终都以全部大写表示；而在XML中，标签名则始终会与源代码中的保持一致，假如你不确定自己的脚本将会在 HTML 还是 XML 文档中执行，最好是在比较之前将标签名转换为相同的大小写形式。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样最好（适用于任何文档）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"html-元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-元素","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML 元素")]),t._v(" "),s("p",[t._v("所有HTML元素都由 HTMLElement 类型表示，不是直接通过这个类型，也是通过它的子类型来表示。HTMLElement 类型直接继承自 Element 并添加了一些属性。添加的这些属性分别对应于每个 HTML 元素中都存在的下列标准特性。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("元素在文档中的唯一标识符")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("有关元素的附加说明信息，一般通过工具提示条显示出来")])]),t._v(" "),s("tr",[s("td",[t._v("lang")]),t._v(" "),s("td",[t._v("元素内容的语言代码，很少使用")])]),t._v(" "),s("tr",[s("td",[t._v("dir")]),t._v(" "),s("td",[t._v("语言的方向，值为 "),s("code",[t._v("ltr")]),t._v("（从左至右）或 "),s("code",[t._v("rtl")]),t._v("（从右至左），也很少使用")])]),t._v(" "),s("tr",[s("td",[t._v("className")]),t._v(" "),s("td",[t._v("与元素的 class 特性对应，即为元素指定的 CSS 类。没有将这个属性命名为 class，是因为 class 是 ECMAScript 保留字")])])])]),t._v(" "),s("h3",{attrs:{id:"操作特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作特性")]),t._v(" "),s("p",[t._v("操作特性的 DOM 方法主要有三个：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("getAttribute()")]),t._v("：获取元素或其内容的附加信息\n"),s("ul",[s("li",[t._v("style：通过该方法获取的是 CSS 文本，通过属性获取的是对象")]),t._v(" "),s("li",[t._v("onclick：该方法获取的是相应代码的字符串，通过属性获取的是一个 JavaScript 函数")])])]),t._v(" "),s("li",[s("code",[t._v("setAttribute()")]),t._v("：设置特性名及其值，如果特性已经存在，会修改特性值，如果不存在则会创建新的特性")]),t._v(" "),s("li",[s("code",[t._v("removeAttribute()")]),t._v("：彻底删除元素的特性，IE6 及之前的版本不支持此方法")])]),t._v(" "),s("h3",{attrs:{id:"创建元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建元素")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("document.createElement()")]),t._v(" 方法可以创建元素。这个方法只接受一个参数，即要创建元素的标签名。这个标签名在 HTML 文档中不区分大小写，而在 XML（包括 HTML）文档中，则是区分大小写的。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);