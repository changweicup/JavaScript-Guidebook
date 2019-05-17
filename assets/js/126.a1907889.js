(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{499:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"screen-视图属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-视图属性","aria-hidden":"true"}},[t._v("#")]),t._v(" Screen 视图属性")]),t._v(" "),s("h3",{attrs:{id:"屏幕分辨率宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕分辨率宽高","aria-hidden":"true"}},[t._v("#")]),t._v(" 屏幕分辨率宽高")]),t._v(" "),s("p",[s("code",[t._v("screen.width")]),t._v(" 和 "),s("code",[t._v("screen.height")]),t._v(" 分别表示当前浏览器的屏幕的宽高，以像素计算。这两个只读属性，一般用来了解设备的分辨率。除非调整显示器的分辨率，否则这两个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。")]),t._v(" "),s("p",[t._v("使用如下示例代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width\nscreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n")])])]),s("h4",{attrs:{id:"实践用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实践用例","aria-hidden":"true"}},[t._v("#")]),t._v(" 实践用例")]),t._v(" "),s("p",[t._v("可以根据屏幕分辨率，将用户导向不同网页。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'small.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wide.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"屏幕可用工作区宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕可用工作区宽高","aria-hidden":"true"}},[t._v("#")]),t._v(" 屏幕可用工作区宽高")]),t._v(" "),s("p",[s("code",[t._v("screen.availWidth")]),t._v(" 和 "),s("code",[t._v("screen.availHeight")]),t._v(" 分别表示显示浏览器的屏幕的可用宽高，以像素计算。屏幕可用高度除去浏览器底部任务栏的屏幕高度。这两个"),s("strong",[t._v("只读")]),t._v("属性均为屏幕的像素高度减去系统部件高度之后的值。")]),t._v(" "),s("p",[t._v("使用如下示例代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("availWidth\nscreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("availHeight\n")])])]),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("screen.width")])]),t._v(" "),s("td",[t._v("屏幕像素宽度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("screen.height")])]),t._v(" "),s("td",[t._v("屏幕像素高度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("screen.availWidth")])]),t._v(" "),s("td",[t._v("屏幕可用宽度")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("screen.availHeight")])]),t._v(" "),s("td",[t._v("屏幕可用高度")])])])])])},[],!1,null,null,null);a.default=n.exports}}]);