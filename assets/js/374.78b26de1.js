(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{339:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"eval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eval","aria-hidden":"true"}},[a._v("#")]),a._v(" eval()")]),a._v(" "),s("p",[s("code",[a._v("eval()")]),a._v(" 函数用于计算并执行以字符串表示的 JavaScript 代码。"),s("code",[a._v("eval()")]),a._v(" 函数使 JavaScript  可以动态执行 JavaScript 源代码。")]),a._v(" "),s("p",[s("code",[a._v("eval()")]),a._v(" 函数属于 "),s("code",[a._v("Global")]),a._v(" 对象，所有主流浏览器均支持该函数。")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("类型")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("code")])]),a._v(" "),s("td",[s("code",[a._v("String")]),a._v(" 类型")]),a._v(" "),s("td",[a._v("包含有效 JavaScript 代码的字符串")])])])]),a._v(" "),s("p",[s("em",[a._v("警告")]),a._v("：参数"),s("code",[a._v("code")]),a._v("必须是原始字符串，不能是String对象形式。如果参数"),s("code",[a._v("code")]),a._v("不是原始字符串，则"),s("code",[a._v("eval()")]),a._v("函数不会执行代码，并且将其不作任何改变地返回。")]),a._v(" "),s("p",[a._v("如果参数"),s("code",[a._v("code")]),a._v("中的JavaScript代码不合法，将会引发异常。")]),a._v(" "),s("h3",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[a._v("#")]),a._v(" 返回值")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("eval()")]),a._v(" 函数的返回值是任意类型，其返回值由参数 "),s("code",[a._v("code")]),a._v(" 中具体的 JavaScript 代码决定。")])]),a._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),s("ul",[s("li",[a._v("传递给 "),s("code",[a._v("eval()")]),a._v(" 函数的代码执行时所在的上下文和调用 "),s("code",[a._v("eval()")]),a._v(" 函数时的上下文一样（也就是说，作用域不变）。")]),a._v(" "),s("li",[a._v("请自行确认 "),s("code",[a._v("code")]),a._v(" 代码的来源是可信的，否则使用 "),s("code",[a._v("eval()")]),a._v(" 函数存在一定的安全隐患。")])]),a._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("h3",{attrs:{id:"标准示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 标准示例")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("39")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" z "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'42'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'x + y + 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// return 42")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\t\t\t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//  return 42")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);