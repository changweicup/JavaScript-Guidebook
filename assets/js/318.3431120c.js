(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{453:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"array-prototype-every"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-every","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.every()")]),t._v(" "),s("p",[s("code",[t._v("every()")]),t._v(" 方法遍历数组中每个成员，通过回调函数判断是否所有成员满足特定条件。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("every")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("currentValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thisArg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("实例方法参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("callback")])]),t._v(" "),s("td",[t._v("用于判定数组成员的回调函数")]),t._v(" "),s("td",[t._v("function")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("thisArg")])]),t._v(" "),s("td",[t._v("执行回调函数的 "),s("code",[t._v("this")]),t._v(" 值")]),t._v(" "),s("td")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("回调函数参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("currentValue")])]),t._v(" "),s("td",[t._v("当前遍历的数组成员")]),t._v(" "),s("td",[t._v("any")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("index")])]),t._v(" "),s("td",[t._v("当前遍历的数组成员的索引")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("arr")])]),t._v(" "),s("td",[t._v("原数组")]),t._v(" "),s("td",[t._v("array")])])])]),t._v(" "),s("p",[s("strong",[t._v("返回值：")]),t._v(" 当所有数组元素满足回调函数的判断时返回 "),s("code",[t._v("true")]),t._v("，否则返回 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("ul",[s("li",[t._v("执行该方法会为数组每个成员执行一次回调函数，回调函数需要通过判断代码块后，返回布尔值作为该成员是否通过检测的凭证，如果通过则再为下一个数组成员执行回调函数，直到遇到第一个判断为 "),s("code",[t._v("false")]),t._v(" 的数组成员则立即给实例方法返回 "),s("code",[t._v("false")]),t._v("，否则全部成员都通过检测的回调函数，则返回 "),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("li",[t._v("回调函数只会为那些已经被赋值的索引调用，不会为那些被删除或从来没有被赋值的索引调用。")]),t._v(" "),s("li",[t._v("如果为实例方法提供一个 "),s("code",[t._v("thisArg")]),t._v(" 参数，则该参数为调用回调函数时的 "),s("code",[t._v("this")]),t._v(" 值。如果省略该参数，则为回调函数被调用时的 "),s("code",[t._v("this")]),t._v(" 值，在非严格模式下为全局对象，在严格模式下传入 "),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("li",[t._v("遍历的数组成员范围在第一次调用回调函数之前就已确定了。在调用 "),s("code",[t._v("every()")]),t._v(" 之后添加到数组中的成员不会被回调函数访问到。如果数组中存在的成员被更改，则他们传入回调函数的值是 "),s("code",[t._v("every()")]),t._v(" 访问到他们那一刻的值。那些被删除的成员或未被赋值的成员将不会被访问到。")])]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("下例检测数组中的所有元素是否都大于 10。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isBigEnough")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("130")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("every")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isBigEnough"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs: false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("130")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("every")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isBigEnough"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs: true")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);