(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{317:function(t,e,s){t.exports=s.p+"assets/img/566f8e31-9eb2-4eee-a066-cecf7f3567e8.835119a5.png"},318:function(t,e,s){t.exports=s.p+"assets/img/9ce037e1-c5ce-485b-9fae-9fa9c65b81ff.cd511b42.png"},606:function(t,e,s){"use strict";s.r(e);var r=s(2),a=Object(r.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),r("p",[t._v("传统异步编程最大特点是地狱式回调嵌套，一旦嵌套层次过深，项目代码将难以理解和维护。而 Promise 能让我们通过链式调用的方法去解决回调地狱的问题。")]),t._v(" "),r("p",[t._v("Promise 是异步编程的一种解决方案，可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。可以在对象之间传递和操作 Promise，帮助我们处理队列。")]),t._v(" "),r("h2",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("executor"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("参数  "),r("code",[t._v("executor")]),t._v(" 是带有 "),r("code",[t._v("resolve")]),t._v(" 和 "),r("code",[t._v("reject")]),t._v(" 两个参数的函数。而这两个参数也是函数，由 JavaScript 引擎提供，不用开发者部署。")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("resolve")]),t._v("：从 Pending（待定） 变为 Fullfilled（实现），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。该函数的参数除了"),r("strong",[t._v("正常的值")]),t._v("以外，还可能是"),r("strong",[t._v("另一个 Promise 实例")]),t._v("。")]),t._v(" "),r("li",[r("code",[t._v("reject")]),t._v("：从 Pending（待定） 变为 Rejected（否决），在异步失败时调用，并将异步操作报出的错误，作为参数传递出去。该函数的参数通常是 "),r("strong",[t._v("Error 对象")]),t._v("的实例，表示抛出的错误。")])]),t._v(" "),r("h3",{attrs:{id:"说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),r("ul",[r("li",[t._v("Promise 构造函数执行时"),r("strong",[t._v("立即调用")]),t._v(" "),r("code",[t._v("executor")]),t._v(" 函数，"),r("code",[t._v("resolve")]),t._v(" 和 "),r("code",[t._v("reject")]),t._v(" 两个函数作为参数传入 "),r("code",[t._v("executor")]),t._v(" （"),r("code",[t._v("executor")]),t._v(" 函数会在 Promise 构造函数返回新建对象前被调用）。")]),t._v(" "),r("li",[r("code",[t._v("executor")]),t._v(" 内部通常会执行一些异步操作，一旦完成，可以调用 "),r("code",[t._v("resolve")]),t._v(" 函数来将 Promise 状态改成 Fulfilled，或者在发生错误时将它的状态改为 Rejected")]),t._v(" "),r("li",[t._v("无法取消 Promise，一旦新建它就会立即执行，"),r("strong",[t._v("无法中途取消")])]),t._v(" "),r("li",[t._v("如果不设置回调函数（executor），Promise 内部抛出错误，不会反应到外部")]),t._v(" "),r("li",[t._v("当处于 Pending 状态时，无法得知目前进展到哪一个阶段")])]),t._v(" "),r("p",[t._v("如果某些事件不断地反复发生，一般来说，使用 "),r("a",{attrs:{href:"https://nodejs.org/api/stream.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stream"),r("OutboundLink")],1),t._v(" 模式是比部署 Promise 更好的选择。")]),t._v(" "),r("h3",{attrs:{id:"示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),r("p",[t._v("🌰 "),r("strong",[t._v("标准示例")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 执行器 */")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步处理")]),t._v("\n        \n        "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据处理完成后执行")]),t._v("\n        \n        "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据处理出错时执行")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功，下一步")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 失败，做相应处理")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h2",{attrs:{id:"工作流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工作流","aria-hidden":"true"}},[t._v("#")]),t._v(" 工作流")]),t._v(" "),r("p",[t._v("Promise 是一个代理对象（代理一个值），被代理的值在 Promise 对象创建时可能是未知的。它允许你为异步操作的 "),r("strong",[t._v("Fulfilled")]),t._v(" 和 "),r("strong",[t._v("Rejected")]),t._v(" 分别绑定相应的处理方法（handlers）。这让异步方法可以像同步方法那样返回值，但"),r("strong",[t._v("并不是立即返回")]),t._v("最终执行结果，而是一个能代表"),r("strong",[t._v("未来出现")]),t._v("的结果的 Promise 对象。")]),t._v(" "),r("p",[t._v("由于 "),r("code",[t._v("Promise.prototype.then")]),t._v(" 和 "),r("code",[t._v("Promise.prototype.catch")]),t._v(" 方法返回 Promise 对象，所以它们可以被 "),r("router-link",{attrs:{to:"/core-modules/ecmascript-function-objects/function-types/cascade-function.html"}},[t._v("链式调用")]),t._v("。")],1),t._v(" "),r("p",[r("img",{attrs:{src:s(317),alt:"Promise Workflow"}})]),t._v(" "),r("h2",{attrs:{id:"状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态")]),t._v(" "),r("p",[t._v("用 "),r("code",[t._v("new")]),t._v(" 实例化的 Promise 对象有以下三种状态：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("状态")]),t._v(" "),r("th",[t._v("含义")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Pending")]),t._v(" "),r("td",[t._v("待定")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("初始状态")])]),t._v(" "),r("tr",[r("td",[t._v("Fulfilled")]),t._v(" "),r("td",[t._v("实现")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("操作成功，此时会调用 "),r("code",[t._v("onFulfilled")])])]),t._v(" "),r("tr",[r("td",[t._v("Rejected")]),t._v(" "),r("td",[t._v("否决")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("操作失败，此时会调用 "),r("code",[t._v("onRejected")])])])])]),t._v(" "),r("p",[r("img",{attrs:{src:s(318),alt:"Promise State"}})]),t._v(" "),r("p",[t._v("⚠️ "),r("strong",[t._v("注意")]),t._v("：Promise 的状态，从 "),r("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("Pending")]),t._v("转换为 "),r("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("Fulfilled")]),t._v(" 或 "),r("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("Rejected")]),t._v(" 之后，这个 Promise 对象的状态就不会发生任何变化。")]),t._v(" "),r("p",[t._v("而当 Promise 状态一旦发生变化，就会触发 "),r("code",[t._v(".then()")]),t._v(" 里的响应函数处理后续步骤。")]),t._v(" "),r("p",[t._v("但是，"),r("code",[t._v(".then()")]),t._v(" 参数中的函数只会调用其中一个，调用哪个取决于该 Promise 的状态。")]),t._v(" "),r("p",[t._v("另外，"),r("strong",[t._v("Fulfilled")]),t._v(" 和 "),r("strong",[t._v("Rejected")]),t._v(" 这两个中的任何一种状态都可以表示为 "),r("strong",[t._v("Settled（不变的）")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"静态方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("方法")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("router-link",{attrs:{to:"/standard-built-in-objects/control-abstraction-objects/promise-objects/properties-of-the-promise-constructor/all.html"}},[t._v("Promise.all(iterable)")])],1),t._v(" "),r("td",[t._v("将多个 Promise 实例包装成一个新的 Promise 实例。全部成员 Fulfilled 或某个成员 Rejected 时触发回调")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"/standard-built-in-objects/control-abstraction-objects/promise-objects/properties-of-the-promise-constructor/race.html"}},[t._v("Promise.race(iterable)")])],1),t._v(" "),r("td",[t._v("将多个 Promise 实例包装成一个新的 Promise 实例。某个成员状态变更后触发回调")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"/standard-built-in-objects/control-abstraction-objects/promise-objects/properties-of-the-promise-constructor/reject.html"}},[t._v("Promise.reject(reason)")])],1),t._v(" "),r("td",[t._v("返回新的 Promise 实例，该实例的状态为 Rejected")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"/standard-built-in-objects/control-abstraction-objects/promise-objects/properties-of-the-promise-constructor/resolve.html"}},[t._v("Promise.resolve(value)")])],1),t._v(" "),r("td",[t._v("返回新的 Promise 实例，该实例的状态为 Fulfilled")])])])]),t._v(" "),r("h2",{attrs:{id:"原型对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原型对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型对象")]),t._v(" "),r("h3",{attrs:{id:"属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("原型属性")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("Promise.prototype.constructor")])]),t._v(" "),r("td",[t._v("返回被创建的实例函数，默认为 Promise 函数")])])])]),t._v(" "),r("h3",{attrs:{id:"方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("原型方法")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("router-link",{attrs:{to:"/standard-built-in-objects/control-abstraction-objects/promise-objects/properties-of-the-promise-prototype-object/catch.html"}},[t._v("Promise.prototype.catch(onRejected)")])],1),t._v(" "),r("td",[t._v("相当于 "),r("code",[t._v(".then(null, rejection)")]),t._v("，用于指定发生错误时的回调函数")])]),t._v(" "),r("tr",[r("td",[r("router-link",{attrs:{to:"/standard-built-in-objects/control-abstraction-objects/promise-objects/properties-of-the-promise-prototype-object/then.html"}},[t._v("Promise.prototype.then(onFulfilled, onRejected)")])],1),t._v(" "),r("td",[t._v("添加 "),r("code",[t._v("fulfillment")]),t._v(" 和 "),r("code",[t._v("rejection")]),t._v(" 回调到当前 Promise，返回一个新的 Promise，将以回调的返回值来 "),r("code",[t._v("resolve")])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("Promise.prototype.finally(onFinally)")])]),t._v(" "),r("td",[t._v("用于指定无论 Promise 对象最后状态如何，都会执行的操作")])])])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("参考资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://liubin.org/promises-book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("📚 JavaScript Promise 迷你书"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5aa7868b6fb9a028dd4de672",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 Promise 原理讲解(遵循 Promise/A+ 规范)"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=a.exports}}]);