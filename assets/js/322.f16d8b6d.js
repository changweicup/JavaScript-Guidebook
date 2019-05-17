(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{438:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"array-prototype-foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-foreach","aria-hidden":"true"}},[t._v("#")]),t._v(" Array.prototype.forEach()")]),t._v(" "),s("p",[s("code",[t._v("Array.prototype.forEach()")]),t._v(" 方法用于迭代数组的每项成员。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thisArg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("实例方法参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("callbackFunc")])]),t._v(" "),s("td",[t._v("用于遍历数组成员时执行的回调函数")]),t._v(" "),s("td",[t._v("function")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("thisArg")])]),t._v(" "),s("td",[t._v("执行回调函数的 "),s("code",[t._v("this")]),t._v(" 值")]),t._v(" "),s("td")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("回调函数参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("currentValue")])]),t._v(" "),s("td",[t._v("当前遍历的数组成员")]),t._v(" "),s("td",[t._v("any")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("index")])]),t._v(" "),s("td",[t._v("当前遍历的数组成员的索引")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("array")])]),t._v(" "),s("td",[t._v("原数组")]),t._v(" "),s("td",[t._v("array")])])])]),t._v(" "),s("p",[s("strong",[t._v("返回值：")]),t._v(" 返回 "),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("ul",[s("li",[t._v("该方法按升序为数组中含有效值的每一项执行一次回调函数，那些已删除（使用 "),s("code",[t._v("delete")]),t._v(" 方法等情况）或者未初始化的项将被跳过（但不包括那些值为 "),s("code",[t._v("undefined")]),t._v(" 的项，例如在稀疏数组中）。")]),t._v(" "),s("li",[t._v("该方法遍历的范围在第一次调用回调函数前就会确定。调用 "),s("code",[t._v("forEach()")]),t._v(" 后添加到数组中的项不会被 "),s("code",[t._v("callback")]),t._v(" 访问到。如果已经存在的值被改变，则传递给 "),s("code",[t._v("callback")]),t._v(" 的值是 "),s("code",[t._v("forEach")]),t._v(" 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 "),s("code",[t._v("shift()")]),t._v(" ） ，之后的元素将被跳过。")]),t._v(" "),s("li",[s("code",[t._v("forEach()")]),t._v(" 为每个数组元素执行 "),s("code",[t._v("callback")]),t._v(" 函数；不像 "),s("code",[t._v("map()")]),t._v(" 或者 "),s("code",[t._v("reduce()")]),t._v(" ，它总是返回 "),s("code",[t._v("undefined")]),t._v(" 值，并且不可链式调用。典型用例是在一个链的最后执行副作用。")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("： 没有办法中止或者跳出 "),s("code",[t._v("forEach")]),t._v("  循环，除了抛出一个异常。如果你需要这样，使用 "),s("code",[t._v("forEach()")]),t._v(" 函数是错误的，你可以用一个简单的循环作为替代。如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用 "),s("code",[t._v("every()")]),t._v(" 或 "),s("code",[t._v("some()")]),t._v("。如果可用，新方法 "),s("code",[t._v("find()")]),t._v(" 或者 "),s("code",[t._v("findIndex()")]),t._v(" 也可被用于真值测试的提早终止。")]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\narr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\narr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a b c")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);