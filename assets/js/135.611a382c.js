(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{515:function(e,_,v){"use strict";v.r(_);var t=v(2),a=Object(t.a)({},function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"跨域资源共享"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享","aria-hidden":"true"}},[e._v("#")]),e._v(" 跨域资源共享")]),e._v(" "),v("p",[e._v("跨域资源共享（CORS：Cross-Origin Resource Sharing）是一种机制，它使用额外的 HTTP 头来告诉浏览器，让运行在相同域（Origin）上的 Web 应用被准许访问来自不同源服务器上的指定的资源（也即是 "),v("router-link",{attrs:{to:"/computer-networks/frontend-security/same-origin-policy.html"}},[e._v("同源策略")]),e._v(" 的 HTTP 解决方案）。当一个资源从与该资源本身所在的服务器"),v("strong",[e._v("不同的域、协议或端口")]),e._v("请求一个资源时，资源会发起一个"),v("strong",[e._v("跨域 HTTP 请求")]),e._v("。")],1),e._v(" "),v("p",[e._v("CORS 机制是为了在认可用户发起的请求的同时，阻止恶意注入脚本；并在以下情况发起的 HTTP 请求时触发：")]),e._v(" "),v("ul",[v("li",[e._v("不同的域：比如从 "),v("code",[e._v("example.com")]),e._v(" 调用 "),v("code",[e._v("api.com")])]),e._v(" "),v("li",[e._v("不同的子域：比如从 "),v("code",[e._v("example.com")]),e._v(" 调用 "),v("code",[e._v("api.example.com")])]),e._v(" "),v("li",[e._v("不同的端口：比如从 "),v("code",[e._v("example.com")]),e._v(" 调用 "),v("code",[e._v("example.com:3001")])]),e._v(" "),v("li",[e._v("不同的协议：比如从 "),v("code",[e._v("https://example.com")]),e._v(" 调用 "),v("code",[e._v("http://example.com")])])]),e._v(" "),v("h2",{attrs:{id:"实现条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现条件","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现条件")]),e._v(" "),v("p",[e._v("浏览器将 CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。")]),e._v(" "),v("h3",{attrs:{id:"简单请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求","aria-hidden":"true"}},[e._v("#")]),e._v(" 简单请求")]),e._v(" "),v("p",[e._v("只要满足以下两大条件，就属于简单请求：")]),e._v(" "),v("p",[e._v("请求方法是以下三种方法之一")]),e._v(" "),v("ul",[v("li",[e._v("HEAD")]),e._v(" "),v("li",[e._v("GET")]),e._v(" "),v("li",[e._v("POST")])]),e._v(" "),v("p",[e._v("HTTP 的首部字段不超出以下几种字段")]),e._v(" "),v("ul",[v("li",[e._v("Accept")]),e._v(" "),v("li",[e._v("Accept-Language")]),e._v(" "),v("li",[e._v("Content-Language")]),e._v(" "),v("li",[e._v("Last-Event-ID")]),e._v(" "),v("li",[e._v("Content-Type\n"),v("ul",[v("li",[v("code",[e._v("application/x-www-form-urlencoded")])]),e._v(" "),v("li",[v("code",[e._v("multipart/form-data")])]),e._v(" "),v("li",[v("code",[e._v("text/plain")])])])])]),e._v(" "),v("h3",{attrs:{id:"非简单请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求","aria-hidden":"true"}},[e._v("#")]),e._v(" 非简单请求")]),e._v(" "),v("p",[e._v("非简单请求需要满足使用以下任意方法的条件：")]),e._v(" "),v("ul",[v("li",[e._v("PUT")]),e._v(" "),v("li",[e._v("DELETE")]),e._v(" "),v("li",[e._v("CONNECT")]),e._v(" "),v("li",[e._v("OPTIONS")]),e._v(" "),v("li",[e._v("TRACE")]),e._v(" "),v("li",[e._v("PATCH")])]),e._v(" "),v("p",[e._v("设置了对 CORS 安全的首部字段集合之外的其他首部字段。")]),e._v(" "),v("ul",[v("li",[e._v("Accept")]),e._v(" "),v("li",[e._v("Accept-Language")]),e._v(" "),v("li",[e._v("Content-Language")]),e._v(" "),v("li",[e._v("Content-Type")]),e._v(" "),v("li",[e._v("DPR")]),e._v(" "),v("li",[e._v("Downlink")]),e._v(" "),v("li",[e._v("Save-Data")]),e._v(" "),v("li",[e._v("Viewport-Width")]),e._v(" "),v("li",[e._v("Width")])]),e._v(" "),v("p",[e._v("Content-Type 的值不属于下列之一：")]),e._v(" "),v("ul",[v("li",[e._v("application/x-www-form-urlencoded")]),e._v(" "),v("li",[e._v("multipart/form-data")]),e._v(" "),v("li",[e._v("text/plain")])]),e._v(" "),v("h4",{attrs:{id:"预请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#预请求","aria-hidden":"true"}},[e._v("#")]),e._v(" 预请求")]),e._v(" "),v("p",[e._v("预请求是 OPTIONS 请求，浏览器会自动添加 Access-Control-Allow-Headers 和 Access-Control-Allow-Methods")]),e._v(" "),v("p",[e._v("需要服务端返回的响应头 Access-Control-Allow-Headers、Access-Control-Allow-Methods 和 Access-Control-Allow-Origin。")]),e._v(" "),v("p",[e._v("除了 Access-Control-Allow-Origin 是必须的之外，其他两种只有在不符合简单请求需要的时候服务器才需要添加，比如在简单请求的基础上自定义了一个请求头 "),v("code",[e._v("X-xx-name: chris")]),e._v("，那么服务器只需要在响应头中添加 Access-Control-Allow-Headers。每种响应头都可以使用 "),v("code",[e._v("*")]),e._v(" 通配符来表示所有。")]),e._v(" "),v("h4",{attrs:{id:"正常请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正常请求","aria-hidden":"true"}},[e._v("#")]),e._v(" 正常请求")]),e._v(" "),v("p",[e._v("预请求完之后就可以发送正常请求了，正常请求的步骤与简单请求一致，也需要添加 Access-Control-Allow-Origin 响应头。")]),e._v(" "),v("h4",{attrs:{id:"减少预请求次数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#减少预请求次数","aria-hidden":"true"}},[e._v("#")]),e._v(" 减少预请求次数")]),e._v(" "),v("p",[e._v("可以通过设置 Access-Control-Max-Aage 来减少预请求的次数，需要包含在预请求的响应头中，指定在该时间内预请求验证有效，不必每次都进行预请求，它的单位是 "),v("code",[e._v("s")]),e._v("。如 "),v("code",[e._v("Access-Control-Max-Age: 1728000")]),e._v("，即有效期为 20 天。")]),e._v(" "),v("h2",{attrs:{id:"其他限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他限制","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他限制")]),e._v(" "),v("ul",[v("li",[e._v("请求头限制")]),e._v(" "),v("li",[e._v("XMLHttpRequestUpload 对象均没有注册任何事件监听器")]),e._v(" "),v("li",[e._v("请求中没有使用 ReadableStream 对象")])]),e._v(" "),v("h2",{attrs:{id:"使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),v("p",[e._v("跨域资源共享标准（Cross-Origin Sharing Standard）允许在下列场景中使用跨域 HTTP 请求：")]),e._v(" "),v("ul",[v("li",[e._v("前文提到的由 XMLHttpRequest 或 Fetch 发起的跨域 HTTP 请求")]),e._v(" "),v("li",[e._v("Web 字体（CSS 通过 "),v("code",[e._v("@font-face")]),e._v(" 使用跨域字体资源）")]),e._v(" "),v("li",[e._v("WebGL 贴图")]),e._v(" "),v("li",[e._v("使用 "),v("code",[e._v("drawImage")]),e._v(" 将 "),v("code",[e._v("Images/viedo")]),e._v(" 画面绘制到 Canvas")]),e._v(" "),v("li",[e._v("样式表（使用 CSSOM ）")])]),e._v(" "),v("blockquote",[v("p",[e._v("⚠️注意：HTML 中 "),v("code",[e._v("<link>")]),e._v("、"),v("code",[e._v("<script>")]),e._v("、"),v("code",[e._v("<img>")]),e._v(" 等标签自带连接属性进行 HTTP 请求是能够无视同源策略的。")])]),e._v(" "),v("hr"),e._v(" "),v("p",[v("strong",[e._v("参考资料：")])]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN HTTP Access control CORS"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5a97b5a3f265da23766ab19a",target:"_blank",rel:"noopener noreferrer"}},[e._v("理解 CORS"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰 跨域资源共享 CORS 详解"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/58f816198d6d81005874fd97",target:"_blank",rel:"noopener noreferrer"}},[e._v("由同源策略到前端跨域"),v("OutboundLink")],1)])])])},[],!1,null,null,null);_.default=a.exports}}]);