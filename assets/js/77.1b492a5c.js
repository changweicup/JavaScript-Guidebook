(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{410:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"块语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块语句","aria-hidden":"true"}},[t._v("#")]),t._v(" 块语句")]),t._v(" "),a("p",[t._v("块语句（Block）用于组合零个或多个语句。该块由一对大括号 "),a("code",[t._v("{}")]),t._v(" 界定，块内形成块级作用域，块作用域内定义的变量将在离开块作用域后立即被回收。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StatementList "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),a("p",[t._v("ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景：")]),t._v(" "),a("ul",[a("li",[t._v("内层变量可能会覆盖外层变量")]),t._v(" "),a("li",[t._v("用来计数的循环变量泄露为全局变量。")])]),t._v(" "),a("p",[t._v("因此，ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。在 ES6 的块级作用域之中，函数声明语句的行为类似于 "),a("code",[t._v("let")]),t._v("，在块级作用域之外不可引用；但又有别于 "),a("code",[t._v("let")]),t._v(" 命令，允许重复声明同名函数且存在函数变量提升。")]),t._v(" "),a("p",[t._v("块级作用域中的函数特征：")]),t._v(" "),a("ul",[a("li",[t._v("允许在块级作用域内声明函数。")]),t._v(" "),a("li",[t._v("函数声明类似于 "),a("code",[t._v("var")]),t._v("，即会提升到全局作用域或函数作用域的头部。")]),t._v(" "),a("li",[t._v("内层作用域声明的函数不干扰外层作用域的函数。")])]),t._v(" "),a("h4",{attrs:{id:"var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("var")])]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("var")]),t._v(" 声明的变量没有块级作用域。在语句块里声明的变量作用域是其所在的函数或者 "),a("code",[t._v("<script>")]),t._v(" 标签内，你可以在语句块外面访问到它。换句话说，语句块不会生成一个新的作用域。尽管单独的语句块是合法的语句，但在 JavaScript 中你不会想使用单独的语句块，因为它们不像你想象的 C 或 Java 中的语句块那样处理事物。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),a("h4",{attrs:{id:"let-和-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-和-const","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")])]),t._v(" "),a("p",[t._v("相比之下，使用 "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 声明的变量是有块级作用域的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("p",[t._v("注意块级作用域里的常量声明 "),a("code",[t._v("const c = 2")]),t._v(" 并不会抛出 "),a("code",[t._v("SyntaxError: Identifier 'a' has already been declared")]),t._v(" 这样的语法错误，因为这是一个新的作用域。")]),t._v(" "),a("h4",{attrs:{id:"function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("function")])]),t._v(" "),a("p",[t._v("函数声明同样被限制在声明它的语句块内。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'outside'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError: foo is not a function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo is called '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inside'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'foo is called inside' ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);