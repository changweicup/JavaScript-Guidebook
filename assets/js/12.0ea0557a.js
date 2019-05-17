(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{313:function(t,s,a){t.exports=a.p+"assets/img/412a100f-2207-4e3f-b425-c15eb8183c11.9ff74e90.jpg"},314:function(t,s,a){t.exports=a.p+"assets/img/5d3094ef-eeec-4808-a001-8018ceaec642.ff102298.jpg"},315:function(t,s,a){t.exports=a.p+"assets/img/9fb93b52-64ab-4974-ac63-59b379738ec2.25d04981.jpg"},316:function(t,s,a){t.exports=a.p+"assets/img/2df64c5e-364f-4b4e-a58b-5033380ecf1f.ca6010a2.jpg"},666:function(t,s,a){"use strict";a.r(s);var n=a(2),o=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),n("p",[t._v("ECMAScript 中描述了原型链的概念，并将原型链作为实现继承的主要方法。其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。")]),t._v(" "),n("p",[t._v("搞懂原型对象和原型链其实就是搞懂 "),n("code",[t._v("prototype")]),t._v("、"),n("code",[t._v("__proto__")]),t._v(" 和 "),n("code",[t._v("constructor")]),t._v(" 之间的相互关系。")]),t._v(" "),n("p",[t._v("我们通过示例并附加图例阐述这种复杂的相互关系。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(313),alt:"prototype"}})]),t._v(" "),n("p",[n("strong",[t._v("图例")])]),t._v(" "),n("ul",[n("li",[t._v("红色箭头表示 "),n("code",[t._v("__proto__")]),t._v(" 属性指向")]),t._v(" "),n("li",[t._v("绿色箭头表示 "),n("code",[t._v("prototype")]),t._v(" 属性指向")]),t._v(" "),n("li",[t._v("棕色箭头表示本身具有的 "),n("code",[t._v("constructor")]),t._v(" 属性")]),t._v(" "),n("li",[t._v("蓝色方块表示对象")]),t._v(" "),n("li",[t._v("浅绿方块表示函数")])]),t._v(" "),n("p",[t._v("在 JavaScript 中，这三者之间依附在不同的引用对象类型上。")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("对象")]),t._v("："),n("code",[t._v("__proto__")]),t._v(" 和 "),n("code",[t._v("constructor")]),t._v(" 是对象独有的。")]),t._v(" "),n("li",[n("strong",[t._v("函数")]),t._v("："),n("code",[t._v("prototype")]),t._v(" 是函数独有的。但是函数也是对象，所以函数也有 "),n("code",[t._v("__proto__")]),t._v(" 和 "),n("code",[t._v("constructor")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"显式原型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#显式原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 显式原型")]),t._v(" "),n("p",[n("img",{attrs:{src:a(314),alt:"proto"}})]),t._v(" "),n("p",[t._v("显示原型对象 "),n("code",[t._v("prototype")]),t._v(" 由"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("函数所独有")]),t._v("，它是从"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("一个函数指向另一个对象")]),t._v("。它的含义是"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("函数的原型对象")]),t._v("，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象。由此可知："),n("code",[t._v("foo.__proto__ === Foo.prototype")]),t._v("，它们两个完全一样。")]),t._v(" "),n("p",[t._v("那 "),n("code",[t._v("prototype")]),t._v(" 属性作用又是什么呢？它的"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("作用")]),t._v("就是包含可以由特定类型的所有实例共享的属性和方法，也就是让该该函数的实例化对象们都可以找到公用的属性和方法。")]),t._v(" "),n("p",[n("strong",[t._v("任何函数在创建的时候，其实会默认同时创建该函数的 "),n("code",[t._v("prototype")]),t._v(" 对象。")])]),t._v(" "),n("h2",{attrs:{id:"隐式原型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#隐式原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐式原型")]),t._v(" "),n("p",[n("img",{attrs:{src:a(315),alt:"prototype"}})]),t._v(" "),n("p",[t._v("在 JavaScript 中的"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("对象")]),t._v("中都有一个  "),n("code",[t._v("__proto__")]),t._v(" 属性，从上图可以看出"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("一个对象指向另一个一个对象")]),t._v("，即指向相对应的对象的原型对象。这个原型对象称为"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("隐式原型对象")]),t._v("。")]),t._v(" "),n("p",[t._v("隐式原型对象的作用在于，当访问一个对象的属性或方法时，如果该对象内部不存在这个属性，那么就会从它的 "),n("code",[t._v("__proto__")]),t._v(" 属性所指向的（原型）对象中寻找（原型也是对象，也有它自己的原型），如果原型对象中也找不到，就会继续在该原型对象的原型对象中找，以此类推，直到找到属性或方法为止，或者查找到顶层原型对象 "),n("code",[t._v("null")]),t._v("，就结束查找，返回 "),n("code",[t._v("undefined")]),t._v("。")]),t._v(" "),n("p",[t._v("整个查找过程中，从当前对象出发沿着原型对象（"),n("code",[t._v("__proto__")]),t._v("）构成的链条查找相关属性和方法直到结束，这些相互关联的对象组成的链条就是"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("原型链")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),n("p",[n("img",{attrs:{src:a(316),alt:"constructor"}})]),t._v(" "),n("p",[t._v("属性 "),n("code",[t._v("constructor")]),t._v(" 也是"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("对象")]),t._v("才拥有的，它是从"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("一个对象指向一个函数")]),t._v("，含义就是"),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("指向该对象的构造函数")]),t._v("，每个对象都有构造函数（本身拥有或继承而来，继承而来的要结合 "),n("code",[t._v("__proto__")]),t._v(" 属性查看会更清楚点），从上图中可以看出 "),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("Function")]),t._v(" 这个对象比较特殊，它的构造函数就是它自己（因为 Function 可以看成是一个函数，也可以是一个对象），所有函数和对象最终都是由 Function 构造函数得来，所以 "),n("code",[t._v("constructor")]),t._v(" 属性的终点就是 "),n("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("Function")]),t._v(" 这个函数。")]),t._v(" "),n("h2",{attrs:{id:"原型对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型对象")]),t._v(" "),n("p",[t._v("原型对象即为当前实例对象的父对象")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("显式原型对象")]),t._v(" "),n("th",[t._v("隐式原型对象")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("属性 "),n("code",[t._v("prototype")])]),t._v(" "),n("td",[t._v("属性 "),n("code",[t._v("__proto__")])])]),t._v(" "),n("tr",[n("td",[t._v("函数独有")]),t._v(" "),n("td",[t._v("对象独有（函数也是对象，因此函数也有该属性）")])]),t._v(" "),n("tr",[n("td",[t._v("定义函数时被自动赋值，值默认为 "),n("code",[t._v("{}")])]),t._v(" "),n("td",[t._v("在创建实例对象时被自动添加，并赋值为构造函数的 "),n("code",[t._v("prototype")]),t._v(" 值")])]),t._v(" "),n("tr",[n("td",[t._v("用于实现基于原型的继承与属性的共享")]),t._v(" "),n("td",[t._v("构成原型链，同样用于实现基于原型的继承")])])])]),t._v(" "),n("p",[t._v("🌰 "),n("strong",[t._v("标准示例：访问原型链中的原型对象")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数 Foo {} 是函数 foo 的原型对象")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数 Object {} 是函数 Function 的原型对象")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型链顶层")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null ")]),t._v("\n")])])]),n("p",[n("strong",[t._v("原型链中查找属性方法和访问原型链中的原型对象的区别")])]),t._v(" "),n("ul",[n("li",[t._v("在原型链中查找属性或方法，如果没有查找到相关属性或方法，返回的是 "),n("code",[t._v("undefined")]),t._v("，表示原型链中没有该属性或方法。")]),t._v(" "),n("li",[t._v("而通过访问原型链中的原型对象，到达原型链终点，即 "),n("code",[t._v("Object.prototype")]),t._v(" 的值为 "),n("code",[t._v("null")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"原型对象的指向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型对象的指向","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型对象的指向")]),t._v(" "),n("p",[n("code",[t._v("__proto__")]),t._v(" 的指向取决于对象创建时的实现方式。")]),t._v(" "),n("h3",{attrs:{id:"字面量方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字面量方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 字面量方式")]),t._v(" "),n("p",[t._v("当通过字面量方式创建对象时，它的原型就是 "),n("code",[t._v("Object.prototype")]),t._v("。")]),t._v(" "),n("p",[t._v("虽然我们无法直接访问内置属性 "),n("code",[t._v("__proto__")]),t._v("，但我们可以通过 "),n("code",[t._v("Object.getPrototypeOf()")]),t._v(" 或对象的属性 "),n("code",[t._v("__proto__")]),t._v(" 获取对象的原型。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("h3",{attrs:{id:"构造器方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造器方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 构造器方式")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("h3",{attrs:{id:"object-create-方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object-create-方式","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.create 方式")]),t._v(" "),n("p",[t._v("通过 "),n("code",[t._v("Object.create()")]),t._v(" 方式创建的对象会以传入的对象参数为对象的原型。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"原型对象与实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型对象与实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型对象与实例")]),t._v(" "),n("p",[t._v("通过 "),n("code",[t._v("instanceof")]),t._v(" 操作符可以确定原型与实例的关系。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设 instanceof 操作符左边是 L 右边是 R")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// instanceof 运算时 通过判断 L 的原型链是否存在 R.prototype")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])])]),n("p",[t._v("⚠️ 注意："),n("code",[t._v("instanceof")]),t._v(" 操作符会递归查找 L 的原型链，即 "),n("code",[t._v("L.__proto__.__proto__.__proto__...")]),t._v(" 知道找到了或者到达顶层为止。")]),t._v(" "),n("p",[t._v("构造器 Function 的构造器是它自身：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Function  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("构造器 Object 的构造器是 Function（因此可得所有构造器的 constructor 都指向 Function）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Function  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("构造器 Function 的 "),n("code",[t._v("[[Prototype]]")]),t._v(" 是一个特殊的匿名函数")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function(){}")]),t._v("\n")])])]),n("p",[t._v("这个特殊的匿名函数的 "),n("code",[t._v("[[Prototype]]")]),t._v(" 指向 Object 的 prototype 原型。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("Object 的 "),n("code",[t._v("[[Prototype]]")]),t._v(" 指向 Function 的 prototype 也就是上述的特殊的匿名函数")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("内置对象 Function 和 Object 的关系：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Function "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nObject "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("其他标准内置对象的字面量原型链关系：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__prto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'String'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("总结：")])]),t._v(" "),n("ul",[n("li",[t._v("所有的构造器的 constructor 都指向 Function")]),t._v(" "),n("li",[t._v("Function 的 prototype 指向一个特殊匿名函数，而这个特殊匿名函数的 "),n("code",[t._v("__proto__")]),t._v(" 指向 Object.prototype")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("参考资料：")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5caefd575188251b2822c17e",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 帮你彻底搞懂 JavaScript 中的 prototype、proto 与 constructor（图解）"),n("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=o.exports}}]);