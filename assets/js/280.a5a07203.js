(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{567:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"object-assign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-assign","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.assign")]),t._v(" "),s("p",[s("code",[t._v("Object.assign()")]),t._v(" 方法用于将所有可枚举自有 Property 的值从一个或多个源对象拷贝到目标对象。")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("sources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("target")]),t._v(" "),s("td",[t._v("目标对象")]),t._v(" "),s("td",[t._v("object")])]),t._v(" "),s("tr",[s("td",[t._v("sources")]),t._v(" "),s("td",[t._v("源对象")]),t._v(" "),s("td",[t._v("object")])])])]),t._v(" "),s("h3",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),s("p",[t._v("返回目标对象。")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。")]),t._v(" "),s("p",[s("code",[t._v("Object.assign")]),t._v(" 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。")]),t._v(" "),s("p",[t._v("该方法使用源对象的 "),s("code",[t._v("[[Get]]")]),t._v(" 和目标对象的 "),s("code",[t._v("[[Set]]")]),t._v("，所以它会调用相关 "),s("code",[t._v("getter")]),t._v(" 和 "),s("code",[t._v("setter")]),t._v("。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含 "),s("code",[t._v("getter")]),t._v("，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用 "),s("router-link",{attrs:{to:"/standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/getOwnPropertyDescriptor.html"}},[t._v("Object.getOwnPropertyDescriptor")]),t._v(" 和 "),s("router-link",{attrs:{to:"/standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/defineProperty.html"}},[t._v("Object.defineProperty")]),t._v(" 。")],1),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("h3",{attrs:{id:"基本示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 1 }")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);