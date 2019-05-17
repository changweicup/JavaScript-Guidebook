(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{219:function(t,a,s){t.exports=s.p+"assets/img/5c5584c0-2044-4c27-9af4-2704cfe30ab7.38492d81.png"},451:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"脚本加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 脚本加载")]),t._v(" "),e("p",[t._v("现代浏览器总是并行加载资源。脚本文件互相不会阻塞，但是会阻塞其他资源（例如图片、字体等）的下载。")]),t._v(" "),e("p",[t._v("后来为了用户体验，有了 "),e("code",[t._v("async")]),t._v(" 和 "),e("code",[t._v("defer")]),t._v(" ，脚本标记为异步，不会阻塞其他线程解析和执行。")]),t._v(" "),e("p",[t._v("当 HTML 解析器被 JavaScript 脚本阻塞时，解析器虽然会停止构建 DOM，但仍会识别该脚本后面的资源，并进行预加载。")]),t._v(" "),e("ol",[e("li",[t._v("默认情况下，CSS 被视为阻塞渲染的资源，这意味着看浏览器将不会渲染任何已处理的内容，直至 CSSOM 构建完毕")]),t._v(" "),e("li",[t._v("JavaScript 不仅可以读取和修改 DOM 属性，还可以读取和修改 CSSOM 属性")])]),t._v(" "),e("p",[t._v("存在阻塞的 CSS 资源时，浏览器会延迟 JavaScript 的执行和 DOM 构建")]),t._v(" "),e("ol",[e("li",[t._v("当浏览器遇到一个 "),e("code",[t._v("<script>")]),t._v(" 标记时，DOM 构建将暂停，直至脚本完成执行。")]),t._v(" "),e("li",[t._v("JavaScript 可以查询和修改 DOM 与 CSSOM。")]),t._v(" "),e("li",[t._v("CSSOM 构建时，JavaScript 执行将暂停，直至 CSSOM 就绪。")])]),t._v(" "),e("p",[e("code",[t._v("<script>")]),t._v(" 标签为止很重要。实际使用时，遵循下面两个原则：")]),t._v(" "),e("ol",[e("li",[t._v("CSS 优先：引入顺序上，CSS 资源先于 JavaScript 资源")]),t._v(" "),e("li",[t._v("JavaScript 应尽量少影响 DOM 的构建，例如把 JavaScript 脚本文件引入放在文档底部或使用异步加载")])]),t._v(" "),e("h2",{attrs:{id:"异步加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步加载")]),t._v(" "),e("ul",[e("li",[t._v("标注为 "),e("code",[t._v("defer")]),t._v(" 的 JavaScript 脚本文件不会停止 HTML 文档解析，而是等到解析结束才执行")]),t._v(" "),e("li",[t._v("标注为 "),e("code",[t._v("async")]),t._v(" 只能引用外部脚本，下载完马上执行，但是不能保证加载顺序。")])]),t._v(" "),e("h3",{attrs:{id:"普通脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 普通脚本")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("浏览器会做如下处理")]),t._v(" "),e("ul",[e("li",[t._v("同步加载，停止解析 document")]),t._v(" "),e("li",[t._v("请求 "),e("code",[t._v("foo.js")])]),t._v(" "),e("li",[t._v("执行 "),e("code",[t._v("foo.js")]),t._v(" 中的脚本")]),t._v(" "),e("li",[t._v("继续解析 document")])]),t._v(" "),e("h3",{attrs:{id:"defer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defer","aria-hidden":"true"}},[t._v("#")]),t._v(" defer")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("code",[t._v("defer")]),t._v(" 属性规定是否对异步加载的脚本延迟执行，直到页面加载为止。")]),t._v(" "),e("ul",[e("li",[t._v("不阻止解析 document，并行下载 "),e("code",[t._v("foo.js")]),t._v("、"),e("code",[t._v("bar.js")])]),t._v(" "),e("li",[t._v("即使下载完 "),e("code",[t._v("foo.js")]),t._v(" 和 "),e("code",[t._v("bar.js")]),t._v(" 仍继续解析 document")]),t._v(" "),e("li",[t._v("按照页面中出现的顺序，在其他同步脚本执行后，"),e("code",[t._v("DOMContentLoaded")]),t._v(" 事件前依次执行 "),e("code",[t._v("foo.js")]),t._v(" 和 "),e("code",[t._v("bar.js")])])]),t._v(" "),e("h3",{attrs:{id:"async"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async","aria-hidden":"true"}},[t._v("#")]),t._v(" async")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("async")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("async")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("code",[t._v("async")]),t._v(" 属性规定异步加载脚本并且立即执行，则会异步执行。")]),t._v(" "),e("ul",[e("li",[t._v("不阻止解析 document，并行下载 "),e("code",[t._v("foo.js")]),t._v(" 和 "),e("code",[t._v("bar.js")])]),t._v(" "),e("li",[t._v("当脚本下载完成后立即执行")]),t._v(" "),e("li",[t._v("两者执行顺序不确定，执行阶段不确定，可能在 "),e("code",[t._v("DOMContentLoaded")]),t._v(" 事件前或者后")]),t._v(" "),e("li",[t._v("第二个脚本文件可能会在第一个脚本文件之前执行，因此确保两者之间互不依赖非常重要")]),t._v(" "),e("li",[t._v("目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容")])]),t._v(" "),e("h3",{attrs:{id:"综合运用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#综合运用","aria-hidden":"true"}},[t._v("#")]),t._v(" 综合运用")]),t._v(" "),e("ul",[e("li",[t._v("如果使用 "),e("code",[t._v("async")]),t._v("：脚本相对于页面的其余部分异步地执行")]),t._v(" "),e("li",[t._v("如果不使用 "),e("code",[t._v("async")]),t._v(" 但使用 "),e("code",[t._v("defer")]),t._v("：脚本将在页面完成解析时执行")]),t._v(" "),e("li",[t._v("如果既不使用 "),e("code",[t._v("async")]),t._v(" 也不使用 "),e("code",[t._v("defer")]),t._v("：在浏览器继续解析页面之前，立即读取并执行脚本")])]),t._v(" "),e("p",[t._v("如果 "),e("code",[t._v("<script>")]),t._v(" 无 "),e("code",[t._v("src")]),t._v(" 属性，则 "),e("code",[t._v("defer")]),t._v(" 和 "),e("code",[t._v("async")]),t._v(" 会被忽略")]),t._v(" "),e("p",[t._v("动态添加的 "),e("code",[t._v("<script>")]),t._v(" 标签隐含 "),e("code",[t._v("async")]),t._v(" 属性")]),t._v(" "),e("p",[e("strong",[t._v("图解脚本的异步加载")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(219),alt:"JavaScript解析"}})]),t._v(" "),e("ul",[e("li",[t._v("两者都不会阻止 document 的解析")]),t._v(" "),e("li",[e("code",[t._v("defer")]),t._v(" 会在 DOMContentLoaded 前依次执行")]),t._v(" "),e("li",[e("code",[t._v("async")]),t._v(" 则是下载完立即执行，不一定是在 DOMContentLoaded 前")]),t._v(" "),e("li",[e("code",[t._v("async")]),t._v(" 因为乱序，所以很适合像 Google Analytics 这样的无依赖脚本")])]),t._v(" "),e("h2",{attrs:{id:"加载事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 加载事项")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("<link>")]),t._v("：加载外部 CSS 样式文件 。异步加载，继续解析 HTML。")]),t._v(" "),e("li",[e("code",[t._v("<script src='url'>")]),t._v("：加载 JavaScript 脚本文件，同步加载并阻塞解析 HTML，加载完马上执行。")]),t._v(" "),e("li",[e("code",[t._v("<script src='url' async>")]),t._v("：加载 JavaScript 脚本文件。异步加载，继续解析 HTML，加载完马上执行。")]),t._v(" "),e("li",[e("code",[t._v("<script src='url' defer>")]),t._v("：加载 JavaScript 脚本文件。异步加载，继续解析 HTML，加载完延迟执行。")]),t._v(" "),e("li",[e("code",[t._v("<img src='url' />")]),t._v("：加载图片，异步加载，继续解析 HTML；但是需要等待 CSS 解析完才解码，所以 CSS 阻塞图片呈现。")])]),t._v(" "),e("p",[t._v("DOMContentLoaded 标识着程序从同步脚本执行转化为事件驱动阶段。")]),t._v(" "),e("ul",[e("li",[t._v("CSSOM 树和 DOM 树是互不关联的两个过程")]),t._v(" "),e("li",[t._v("CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染")]),t._v(" "),e("li",[t._v('JavaScript 阻塞 DOM 解析，但浏览器会"偷看"DOM，提前下载资源')]),t._v(" "),e("li",[t._v("平时我们把 "),e("code",[t._v("<link>")]),t._v(" 标签放部头而 "),e("code",[t._v("<script>")]),t._v(" 放 "),e("code",[t._v("<body>")]),t._v(" 尾部，是因为 JavaScript 阻塞阻塞 DOM 树的构建")]),t._v(" "),e("li",[t._v("但是 JavaScript 需要查询 CSS 信息，所以 JavaScript 还要等待 CSSOM 树构建完才可以执行")]),t._v(" "),e("li",[t._v("这就造成 CSS 阻塞了 JavaScript，JavaScript 阻塞了 DOM 树构建")])]),t._v(" "),e("ul",[e("li",[t._v("浏览器遇到 "),e("code",[t._v("<script>")]),t._v(" 且没有 "),e("code",[t._v("defer")]),t._v(" 或 "),e("code",[t._v("async")]),t._v(" 属性的标签时，会触发页面渲染，因而如果前面 CSS 资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。")])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("参考资料：")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5b0a6f1af265da0ddb63ecd9#heading-28",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 浏览器原理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000006778717",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 浅谈 script 标签的 defer 和 async"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24944905",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 JavaScript 和 CSS 的位置对资源加载顺序的影响"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);