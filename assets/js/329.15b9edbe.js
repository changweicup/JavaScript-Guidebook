(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{417:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"array-prototype-pop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-pop","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.pop()")]),t._v(" "),a("p",[a("code",[t._v("Array.prototype.pop()")]),t._v(" 方法用于移除数组最后一个成员，并返回该数组成员。")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("返回值：")]),t._v(" 返回被移除的数组成员。如果该数组为空（没有任何元素），则返回 "),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("ul",[a("li",[t._v("该方法和 "),a("code",[t._v("call()")]),t._v(" 或 "),a("code",[t._v("apply()")]),t._v(" 一起使用时，可应用在类数组对象上。"),a("code",[t._v("pop")]),t._v(" 方法根据 "),a("code",[t._v("length")]),t._v(" 属性来确定最后一个元素的位置。如果不包含 "),a("code",[t._v("length")]),t._v(" 属性或 "),a("code",[t._v("length")]),t._v(" 属性不能被转成一个数值，会将 "),a("code",[t._v("length")]),t._v(" 置为 0，并返回 "),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("li",[t._v("由于该方法会移除数组中的"),a("strong",[t._v("最后一个元素")]),t._v("，数组的 "),a("code",[t._v("length")]),t._v(" 属性也会随之改变（如果数组中有元素的话），一般而言，数组的 "),a("code",[t._v("length")]),t._v(" 属性将会减1。")]),t._v(" "),a("li",[t._v("如果你在一个空数组上调用 "),a("code",[t._v("pop()")]),t._v("，它返回 "),a("code",[t._v("undefined")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("h4",{attrs:{id:"标准示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 标准示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myFish "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" popped "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myFish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['a', 'b', 'c', 'd']")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("popped"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// surgeon")]),t._v("\n")])])]),a("h4",{attrs:{id:"在空数组中调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在空数组中调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 在空数组中调用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" empty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" popped "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("popped"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// []")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);