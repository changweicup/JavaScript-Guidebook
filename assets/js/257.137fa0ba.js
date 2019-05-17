(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{633:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"属性操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性操作")]),t._v(" "),a("p",[t._v("📖 "),a("strong",[t._v("快速目录")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%B1%9E%E6%80%A7%E6%9F%A5%E8%AF%A2"}},[t._v("属性查询")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE"}},[t._v("属性设置")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B1%9E%E6%80%A7%E5%88%A0%E9%99%A4"}},[t._v("属性删除")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B1%9E%E6%80%A7%E7%BB%A7%E6%89%BF"}},[t._v("属性继承")])])]),t._v(" "),a("h2",{attrs:{id:"属性查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性查询","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性查询")]),t._v(" "),a("p",[t._v("属性查询在表达式层面也成为 "),a("router-link",{attrs:{to:"/basic-concept/expressions/primary-expression/property-accessors.html"}},[t._v("属性访问器")]),t._v("。")],1),t._v(" "),a("p",[t._v("属性查询一般有两种方法：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%82%B9%E8%BF%90%E7%AE%97%E7%AC%A6"}},[t._v("点运算符")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%96%B9%E6%8B%AC%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6"}},[t._v("方括号运算符")])])]),t._v(" "),a("p",[t._v("键名可以是中文，因为中文相当于字符，与英文字符同样对待，因此可以写成 "),a("code",[t._v("person.白")]),t._v(" 或 "),a("code",[t._v("person['白']")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    白 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("白"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'白'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("h3",{attrs:{id:"点运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 点运算符")]),t._v(" "),a("p",[t._v("点运算符是很多面向对象语句的通用写法，由于其比较简单，所以较方括号运算符相比，更常用。")]),t._v(" "),a("p",[t._v("由于 JavaScript 是弱类型语言，在任何对象中都可以创建任意数量的属性。但当通过点运算符 "),a("code",[t._v(".")]),t._v(" 访问对象的属性时，属性名用一个标识符来表示，标识符要符合 "),a("router-link",{attrs:{to:"/basic-concept/lexical-grammar/lexical-grammar.html#标识符"}},[t._v("变量命名规则")]),t._v("。标识符必须直接出现在 JavaScript 程序中，它们不是数据类型，因此程序无法修改它们。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于变量不可以以数字开头，所以o.1报错")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught SyntaxError: missing ) after argument list")]),t._v("\n")])])]),a("h3",{attrs:{id:"方括号运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方括号运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 方括号运算符")]),t._v(" "),a("p",[t._v("当通过方括号运算符 "),a("code",[t._v("[]")]),t._v(" 来访问对象的属性时，属性名通过字符串来表示。字符串是 JavaScript 的数据类型，在程序运行中可以修改和创建它们。")]),t._v(" "),a("p",[t._v("使用方括号运算符有两个优点：")]),t._v(" "),a("ul",[a("li",[t._v("可以通过变量来访问属性")]),t._v(" "),a("li",[t._v("属性名称可以为 JavaScript 无效标识符")])]),t._v(" "),a("p",[t._v("方括号中的值若是非字符串类型会使用 "),a("code",[t._v("String()")]),t._v(" 隐式转换成字符串再输出。如果是字符串类型，若有引号则原值输出，否则会被识别为变量，若变量未定义，则报错。")]),t._v(" "),a("h4",{attrs:{id:"可计算属性名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可计算属性名","aria-hidden":"true"}},[t._v("#")]),t._v(" 可计算属性名")]),t._v(" "),a("p",[t._v("在方括号运算符内部可以使用表达式。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'abc'")]),t._v("\n")])])]),a("p",[t._v("但如果要在对象字面量内部对属性名使用表达式，则需要使用 ES6 的可计算属性名。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught SyntaxError: Unexpected token +")]),t._v("\n")])])]),a("p",[t._v("ES6 增加了可计算属性名，可以在文字中使用 "),a("code",[t._v("[]")]),t._v(" 包裹一个表达式来当作属性名。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'bar'")]),t._v("\n")])])]),a("h4",{attrs:{id:"属性查询错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性查询错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性查询错误")]),t._v(" "),a("p",[t._v("查询一个不存在的属性不会报错，而是返回 "),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("p",[t._v("如果对象不存在，试图查询这个不存在的对象的属性会报错。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught ReferenceError: person is not defined")]),t._v("\n")])])]),a("p",[t._v("可以利用这一点，来检查一个全局变量是否被声明。")]),t._v(" "),a("p",[t._v("检查变量是否被声明")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught ReferenceError: a is not defined")]),t._v("\n")])])]),a("p",[t._v("所有全局变量都是 Window 对象的属性。"),a("code",[t._v("window.a")]),t._v(" 的含义就是读取 Window 对象的 "),a("code",[t._v("a")]),t._v(" 属性，如果该属性不存在，就返回 "),a("code",[t._v("undefined")]),t._v("，并不会报错。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"属性设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性设置")]),t._v(" "),a("p",[t._v("属性设置又称为属性赋值，与属性查询相同，具有"),a("strong",[t._v("点运算符")]),t._v("和"),a("strong",[t._v("方括号运算符")]),t._v("这两种方法。")]),t._v(" "),a("p",[t._v("🌰 "),a("strong",[t._v("标准示例：点运算符")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("🌰 "),a("strong",[t._v("标准示例：方括号运算符")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"赋值检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值检测","aria-hidden":"true"}},[t._v("#")]),t._v(" 赋值检测")]),t._v(" "),a("p",[t._v("在给对象设置属性之前，一般要先检测对象是否存在。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bad")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtitle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"原始类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原始类型")]),t._v(" "),a("p",[t._v("由于 String、Number 和 Boolean 等数据类型的值有对应的包装对象，所以给它们设置属性不会报错。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("p",[t._v("而 "),a("code",[t._v("null")]),t._v(" 和 "),a("code",[t._v("undefined")]),t._v(" 不是对象，给它们设置属性会报错。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught TypeError: Cannot set property 'a' of null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught TypeError: Cannot set property 'a' of undefined")]),t._v("\n")])])]),a("h2",{attrs:{id:"属性删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性删除")]),t._v(" "),a("p",[t._v("使用 "),a("router-link",{attrs:{to:"/basic-concept/expressions/unary-operators/delete.html"}},[t._v("delete")]),t._v(" 运算符可以删除对象属性（包括数组元素）。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// delete object attribute")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("ul",[a("li",[t._v("给对象属性设置 "),a("code",[t._v("null")]),t._v(" 或 "),a("code",[t._v("undefined")]),t._v("，并没有删除该属性")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("delete")]),t._v(" 删除数组元素时，不会改变数组长度")]),t._v(" "),a("li",[a("code",[t._v("delete")]),t._v(" 运算符只能删除自有属性，不能删除继承属性\n"),a("ul",[a("li",[t._v("要删除继承属性必须从定义这个属性的原型对象上删除它，而且这会影响到所有继承自这个原型的对象")])])]),t._v(" "),a("li",[a("code",[t._v("delete")]),t._v(" 操作符的返回值是个布尔值 "),a("code",[t._v("true")]),t._v(" 或 "),a("code",[t._v("false")]),t._v(" "),a("ul",[a("li",[t._v("当使用 "),a("code",[t._v("delete")]),t._v(" 操作符删除对象属性或数组元素删除成功时，返回 "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("当使用 "),a("code",[t._v("delete")]),t._v(" 操作符删除不存在的属性或非左值时，返回 "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("当使用 "),a("code",[t._v("delete")]),t._v(" 操作符删除变量时，返回 "),a("code",[t._v("false")]),t._v("，严格模式下会抛出 ReferenceError 错误")]),t._v(" "),a("li",[t._v("当使用 "),a("code",[t._v("delete")]),t._v(" 操作符删除不可配置的属性时，返回 "),a("code",[t._v("false")]),t._v("，严格模式下会抛出 TypeError 错误")])])])]),t._v(" "),a("h2",{attrs:{id:"属性继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性继承")]),t._v(" "),a("p",[t._v('每个 Javascript 对象都和另一个对象相关联。"另一个对象"就是我们熟知的原型，每一个对象都从原型继承属性。')]),t._v(" "),a("p",[t._v("所有通过对象直接量创建的对象都具有同一个原型对象，并可以通过 "),a("code",[t._v("Object.prototype")]),t._v(" 获得对原型对象的引用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("code",[t._v("Object.prototype")]),t._v(" 的原型对象是 "),a("code",[t._v("null")]),t._v("，所以它不继承任何属性。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("对象本身具有的属性叫 "),a("strong",[t._v("自有属性")]),t._v("（Own Property），从原型对象继承而来的属性叫 "),a("strong",[t._v("继承属性")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"判断方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断方法")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/basic-concept/expressions/unary-operators/in.html"}},[t._v("in")]),t._v("："),a("code",[t._v("in")]),t._v(" 操作符可以判断属性在不在该对象上，但无法区别自有还是继承属性。")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/basic-concept/statements-and-declarations/iteration-statement/the-for-in-statement.html"}},[t._v("for-in")]),t._v("：通过 "),a("code",[t._v("for-in")]),t._v(" 循环可以遍历出该对象中所有"),a("strong",[t._v("可枚举属性")]),t._v("。")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-prototype-object/hasOwnProperty.html"}},[t._v("hasOwnProperty")]),t._v("：通过 "),a("code",[t._v("hasOwnProperty()")]),t._v(" 方法"),a("strong",[t._v("可以确定该属性是自有属性还是继承属性")]),t._v("。")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/keys.html"}},[t._v("Object.keys")]),t._v("："),a("code",[t._v("Object.keys()")]),t._v(" 方法返回所有"),a("strong",[t._v("可枚举的自有属性")]),t._v("。")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/getOwnPropertyNames.html"}},[t._v("Object.getOwnPropertyNames")]),t._v("："),a("code",[t._v("Object.getOwnPropertyNames()")]),t._v(" 方法返回所有自有属性（包括不可枚举的属性）。")],1)])])},[],!1,null,null,null);s.default=e.exports}}]);