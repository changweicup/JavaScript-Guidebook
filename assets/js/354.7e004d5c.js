(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{359:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"string-prototype-charcodeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-prototype-charcodeat","aria-hidden":"true"}},[t._v("#")]),t._v(" String.prototype.charCodeAt()")]),t._v(" "),s("p",[s("code",[t._v("charCodeAt()")]),t._v(" 方法返回0到65535之间的整数，表示给定索引处的 UTF-16 代码单元（在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 >  "),s("code",[t._v("0x10000")]),t._v(" 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元） 。如果你想要整个代码点的值，使用 "),s("code",[t._v("codePointAt()")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("index")])]),t._v(" "),s("td",[s("code",[t._v("Number")]),t._v(" 类型")]),t._v(" "),s("td",[t._v("一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。")])])])]),t._v(" "),s("h3",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),s("p",[t._v("返回值表示字符串对象指定索引处的字符的Unicode编码；如果索引超出范围，则返回 "),s("code",[t._v("NaN")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("Unicode 编码单元（code points）的范围从 0 到 1114111（"),s("code",[t._v("0x10FFFF")]),t._v("）。开头的 128 个 Unicode 编码单元和 ASCII 字符编码一样。关于 Unicode 的更多信息，可查看 JavaScript Guide。")]),t._v(" "),s("p",[t._v("注意，"),s("code",[t._v("charCodeAt")]),t._v(' 总是返回一个小于 65536 的值。这是因为高位编码单元（higher code point）使用一对（低位编码（lower valued））代理伪字符（"surrogate" pseudo-characters）来表示，从而构成一个真正的字符。因此，为了查看或复制（reproduce）65536 及以上编码字符的完整字符，需要在获取 '),s("code",[t._v("charCodeAt(i)")]),t._v(" 的值的同时获取 "),s("code",[t._v("charCodeAt(i+1)")]),t._v(" 的值（如同查看/reproducing 拥有两个字符的字符串一样），或者改为获取 "),s("code",[t._v("codePointAt(i)")]),t._v(" 的值。")]),t._v(" "),s("p",[t._v("如果指定的 "),s("code",[t._v("index")]),t._v(" 小于 0 或不小于字符串的长度，则 "),s("code",[t._v("charCodeAt")]),t._v(" 返回 "),s("code",[t._v("NaN")]),t._v("。")]),t._v(" "),s("p",[t._v("向后兼容：在历史版本中（如 JavaScript 1.2），"),s("code",[t._v("charCodeAt")]),t._v(" 返回一个数字，表示给定 "),s("code",[t._v("index")]),t._v(" 处字符的 ISO-Latin-1 编码值。ISO-Latin-1 编码集范围从 0 到 255。开头的 0 到 127 直接匹配 ASCII 字符集。")]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("h3",{attrs:{id:"标准示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 标准示例")]),t._v(" "),s("p",[t._v("下例介绍了不同索引情况下返回的 Unicode 值：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns 65")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns 66")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns 67")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns NaN")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);