(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{341:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"encodeuri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encodeuri","aria-hidden":"true"}},[t._v("#")]),t._v(" encodeURI")]),t._v(" "),e("p",[e("code",[t._v("encodeURI()")]),t._v(" 函数可把 URI 字符串采用 UTF-8 编码格式转化成 escape 格式的字符串。")]),t._v(" "),e("p",[t._v("该函数属于 "),e("code",[t._v("Global")]),t._v(" 对象，所有主流浏览器均支持该函数。")]),t._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("URIString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("URIString")])]),t._v(" "),e("td",[e("code",[t._v("String")]),t._v(" 类型")]),t._v(" "),e("td",[t._v("需要编码的URI字符串")])])])]),t._v(" "),e("h3",{attrs:{id:"返回值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),e("ul",[e("li",[t._v("返回一个已经编码的 URI 字符串。")])]),t._v(" "),e("h3",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),e("ul",[e("li",[t._v("如果要对使用 "),e("code",[t._v("encodeURI()")]),t._v(" 函数编码的 URI 字符串进行解码，请使用 "),e("code",[t._v("decodeURI()")]),t._v(" 函数。")]),t._v(" "),e("li",[e("code",[t._v("encodeURI()")]),t._v(" 函数不编码字符有82个 "),e("code",[t._v("!")]),t._v(" "),e("code",[t._v("#")]),t._v(" "),e("code",[t._v("$")]),t._v(" "),e("code",[t._v("'")]),t._v(" "),e("code",[t._v("(")]),t._v(" "),e("code",[t._v(")")]),t._v(" "),e("code",[t._v("*")]),t._v(" "),e("code",[t._v("+")]),t._v(" "),e("code",[t._v(",")]),t._v(" "),e("code",[t._v("-")]),t._v(" "),e("code",[t._v(".")]),t._v(" "),e("code",[t._v("/")]),t._v(" "),e("code",[t._v(":")]),t._v(" "),e("code",[t._v(";")]),t._v(" "),e("code",[t._v("=")]),t._v(" "),e("code",[t._v("?")]),t._v(" "),e("code",[t._v("@")]),t._v(" "),e("code",[t._v("_")]),t._v(" "),e("code",[t._v("~")]),t._v(" "),e("code",[t._v("0-9")]),t._v(" "),e("code",[t._v("a-z")]),t._v(" "),e("code",[t._v("A-Z")]),t._v(" 。")]),t._v(" "),e("li",[t._v("如果你只是想编码一个带有特殊字符（比如中文）的 URI，这个 URI 用作请求地址，请使用本函数。如果你想把 URI 当作请求参数传递，那么你可以使用 "),e("code",[t._v("encodeURIComponent()")]),t._v(" 函数。"),e("code",[t._v("encodeURIComponent()")]),t._v(" 函数会编码所有的字符。")])]),t._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("h3",{attrs:{id:"标准示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 标准示例")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原URI")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ftpUri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ftp://192.168.0.100/共享文件夹"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编码URI")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodedFtpUri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ftpUri "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" encodedFtpUri "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ftp://192.168.0.100/%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B9 ")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解码URI")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" decodedFtpUri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" encodedFtpUri "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" decodedFtpUri "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ftp://192.168.0.100/共享文件夹")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);