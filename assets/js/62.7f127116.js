(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{388:function(v,_,t){"use strict";t.r(_);var d=t(2),e=Object(d.a)({},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"运算符优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级","aria-hidden":"true"}},[v._v("#")]),v._v(" 运算符优先级")]),v._v(" "),t("p",[v._v("运算符的优先级决定了表达式中运算执行的先后顺序，优先级高的运算符最先被执行。")]),v._v(" "),t("h2",{attrs:{id:"结合性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结合性","aria-hidden":"true"}},[v._v("#")]),v._v(" 结合性")]),v._v(" "),t("p",[v._v("结合性决定了拥有相同优先级的运算符的执行顺序。考虑下面这个表达式：")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[v._v("a "),t("span",{pre:!0,attrs:{class:"token constant"}},[v._v("OP")]),v._v(" b "),t("span",{pre:!0,attrs:{class:"token constant"}},[v._v("OP")]),v._v(" c\n")])])]),t("p",[v._v("左结合（左到右）相当于把左边的子表达式加上小括号 "),t("code",[v._v("(a OP b) OP c")]),v._v("，右关联（右到左）相当于 "),t("code",[v._v("a OP (b OP c)")]),v._v("。")]),v._v(" "),t("p",[v._v("赋值运算符是右关联的，所以你可以这么写：")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[v._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),t("p",[v._v("结果 "),t("code",[v._v("a")]),v._v(" 和 "),t("code",[v._v("b")]),v._v(" 的值都会成为 5。这是因为赋值运算符的返回结果就是赋值运算符右边的那个值，具体过程是："),t("code",[v._v("b")]),v._v("被赋值为 5，然后"),t("code",[v._v("a")]),v._v("也被赋值为 "),t("code",[v._v("b=5")]),v._v(" 的返回值，也就是 5。")]),v._v(" "),t("h2",{attrs:{id:"汇总表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#汇总表","aria-hidden":"true"}},[v._v("#")]),v._v(" 汇总表")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("优先级")]),v._v(" "),t("th",[v._v("运算类型")]),v._v(" "),t("th",[v._v("关联性")]),v._v(" "),t("th",[v._v("运算符")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("20")]),v._v(" "),t("td",[v._v("圆括号")]),v._v(" "),t("td",[v._v("n/a")]),v._v(" "),t("td",[t("code",[v._v("(...)")])])]),v._v(" "),t("tr",[t("td",[v._v("19")]),v._v(" "),t("td",[v._v("成员访问")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("….…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("需计算的成员访问")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…[…]")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("new（带参数列表）")]),v._v(" "),t("td",[v._v("n/a")]),v._v(" "),t("td",[t("code",[v._v("new …(…)")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("函数调用")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…(…)")])])]),v._v(" "),t("tr",[t("td",[v._v("18")]),v._v(" "),t("td",[v._v("new（无参数列表）")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("new …")])])]),v._v(" "),t("tr",[t("td",[v._v("17")]),v._v(" "),t("td",[v._v("后置递增（运算符在后）")]),v._v(" "),t("td",[v._v("n/a")]),v._v(" "),t("td",[t("code",[v._v("…++")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("后置递减（运算符在后）")]),v._v(" "),t("td",[v._v("n/a")]),v._v(" "),t("td",[t("code",[v._v("…—")])])]),v._v(" "),t("tr",[t("td",[v._v("16")]),v._v(" "),t("td",[v._v("逻辑非")]),v._v(" "),t("td",[v._v("从右到左")]),v._v(" "),t("td",[t("code",[v._v("!…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("按位非")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("~…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("一元加法")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("+…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("一元减法")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("前置递增")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("++…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("前置递减")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("—…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("typeof")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("typeof…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("void")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("void…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("delete")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("delete…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("await")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("await…")])])]),v._v(" "),t("tr",[t("td",[v._v("15")]),v._v(" "),t("td",[v._v("幂")]),v._v(" "),t("td",[v._v("从右到左")]),v._v(" "),t("td",[t("code",[v._v("…**…")])])]),v._v(" "),t("tr",[t("td",[v._v("14")]),v._v(" "),t("td",[v._v("乘法")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…*…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("除法")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…/…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("取模")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…%…")])])]),v._v(" "),t("tr",[t("td",[v._v("13")]),v._v(" "),t("td",[v._v("加法")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…+…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("减法")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…-…")])])]),v._v(" "),t("tr",[t("td",[v._v("12")]),v._v(" "),t("td",[v._v("按位左移")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…<<…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("按位右移")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…>>…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("无符号右移")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("...>>>…")])])]),v._v(" "),t("tr",[t("td",[v._v("11")]),v._v(" "),t("td",[v._v("小于")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…<…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("小于等于")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…<=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("大于")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…>…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("大于等于")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…>=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("in")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…in…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("instanceof")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…instance…")])])]),v._v(" "),t("tr",[t("td",[v._v("10")]),v._v(" "),t("td",[v._v("等号")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…==…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("非等号")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…!==…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("全等号")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…===…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("非全等号")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…!==…")])])]),v._v(" "),t("tr",[t("td",[v._v("9")]),v._v(" "),t("td",[v._v("按位与")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…&…")])])]),v._v(" "),t("tr",[t("td",[v._v("8")]),v._v(" "),t("td",[v._v("按位异或")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…^…")])])]),v._v(" "),t("tr",[t("td",[v._v("7")]),v._v(" "),t("td",[v._v("按位或")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…|…")])])]),v._v(" "),t("tr",[t("td",[v._v("6")]),v._v(" "),t("td",[v._v("逻辑与")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…&&…")])])]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("逻辑或")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…||…")])])]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td",[v._v("条件运算符")]),v._v(" "),t("td",[v._v("从右到左")]),v._v(" "),t("td",[t("code",[v._v("…?…:…")])])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("赋值")]),v._v(" "),t("td",[v._v("从右到左")]),v._v(" "),t("td",[t("code",[v._v("…=..")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("….+=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…-=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…*=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…/=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…%=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…<<=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…>>=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…>>>=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…&=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…^=…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("…\\|=…")])])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("yield")]),v._v(" "),t("td",[v._v("从右到左")]),v._v(" "),t("td",[t("code",[v._v("yield…")])])]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[v._v("yield*")]),v._v(" "),t("td"),v._v(" "),t("td",[t("code",[v._v("yield*…")])])]),v._v(" "),t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("扩展运算符")]),v._v(" "),t("td",[v._v("n/a")]),v._v(" "),t("td",[t("code",[v._v("...…")])])]),v._v(" "),t("tr",[t("td",[v._v("0")]),v._v(" "),t("td",[v._v("都逗号")]),v._v(" "),t("td",[v._v("从左到右")]),v._v(" "),t("td",[t("code",[v._v("…,…")])])])])])])},[],!1,null,null,null);_.default=e.exports}}]);