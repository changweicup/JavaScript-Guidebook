(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{613:function(t,e,o){"use strict";o.r(e);var d=o(2),v=Object(d.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node","aria-hidden":"true"}},[t._v("#")]),t._v(" Node")]),t._v(" "),o("p",[t._v("Node 是一个接口，许多 DOM 类型从这个接口继承，并允许类似地处理这些各种类型。")]),t._v(" "),o("p",[t._v("以下接口都从 Node 继承其方法和属性：")]),t._v(" "),o("ul",[o("li",[t._v("Document")]),t._v(" "),o("li",[t._v("Element")]),t._v(" "),o("li",[t._v("CharacterData（Text、Comment、CDATASection）")]),t._v(" "),o("li",[t._v("DocumentFragment")]),t._v(" "),o("li",[t._v("DocumentType")])]),t._v(" "),o("h3",{attrs:{id:"node-属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-属性","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 属性")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("是否只读")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Node.nodeName")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("名称")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.nodeType")]),t._v(" "),o("td",[t._v("获取"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("当前节点类型的常数值")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.nodeValue")]),t._v(" "),o("td",[t._v("获取或设置"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("当前节点的值")])]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("Node.textContent")]),t._v(" "),o("td",[t._v("获取或设置当前节点及其所有后代节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("文本内容")])]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("Node.baseURI")]),t._v(" "),o("td",[t._v("获取当前网页的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("绝对路径")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.ownerDocument")]),t._v(" "),o("td",[t._v("获取当前节点所在的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("顶层文档对象")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.nextSibling")]),t._v(" "),o("td",[t._v("获取当前节点"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("后面")]),t._v("的第一个"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("兄弟节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.previousSibling")]),t._v(" "),o("td",[t._v("获取当前节点"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("前面")]),t._v("的第一个"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("兄弟节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.parentNode")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("父节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.parentElement")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("父元素节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.childNodes")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("所有子节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.firstChild")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("第一个子节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("Node.lastChild")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("最后一个子节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("ParentNode.children")]),t._v(" "),o("td",[t._v("获取当前节点的包含"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("所有子元素节点的列表")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("ParentNode.firstElementChild")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("第一个子元素节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("ParentNode.lastElementChild")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("最后一个子元素节点")])]),t._v(" "),o("td",[t._v("✔")])]),t._v(" "),o("tr",[o("td",[t._v("ParentNode.childElementCount")]),t._v(" "),o("td",[t._v("获取当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("所有子元素节点的数目")])]),t._v(" "),o("td",[t._v("✔")])])])]),t._v(" "),o("p",[t._v("⚠️ "),o("strong",[t._v("注意")]),t._v("：这里的 ParentNode 实质仍为 Node 节点类型，只是为了语义上表达更清晰写成 ParentNode ，表示父节点。下面的 ChildNode 同。")]),t._v(" "),o("h3",{attrs:{id:"node-方法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 方法")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("方法")]),t._v(" "),o("th",[t._v("说明")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Node.appendChild(node)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("添加")]),t._v("节点到当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("子节点列表中的末尾")])])]),t._v(" "),o("tr",[o("td",[t._v("Node.hasChildNodes()")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("判断")]),t._v("当前节点是否"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("含有子节点")])])]),t._v(" "),o("tr",[o("td",[t._v("Node.cloneNode(true)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("克隆")]),t._v("节点到当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("子节点列表")]),t._v("（及其属性和后代节点）")])]),t._v(" "),o("tr",[o("td",[t._v("Node.insertBefore(newNode,oldNode)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("插入")]),t._v("节点到当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("某个指定子节点前面")])])]),t._v(" "),o("tr",[o("td",[t._v("Node.removeChild(node)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("删除")]),t._v("当前节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("某个指定子节点")])])]),t._v(" "),o("tr",[o("td",[t._v("Node.replaceChild(newChild,oldChild)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("替换")]),t._v("当前节点的某个指定"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("子节点")]),t._v("为指定的节点")])]),t._v(" "),o("tr",[o("td",[t._v("Node.compareDocumentPosition(node)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("比较")]),t._v("当前节点与任意文档中的另一节点的"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("位置关系")])])]),t._v(" "),o("tr",[o("td",[t._v("Node.isEqualNode(node)")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("判断")]),t._v("两个节点是否"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("相等")])])]),t._v(" "),o("tr",[o("td",[t._v("Node.normalize()")]),t._v(" "),o("td",[t._v("规范化当前节点及其后代节点")])]),t._v(" "),o("tr",[o("td",[t._v("ChildNode.remove()")]),t._v(" "),o("td",[t._v("从文档中"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("移除")]),t._v("当前节点")])]),t._v(" "),o("tr",[o("td",[t._v("ChildNode.before()")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("插入")]),t._v("节点到当前节点"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("前面")])])]),t._v(" "),o("tr",[o("td",[t._v("ChildNode.after()")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("插入")]),t._v("节点到当前节点"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("后面")])])]),t._v(" "),o("tr",[o("td",[t._v("ChildNode.replaceWith()")]),t._v(" "),o("td",[o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("替换")]),t._v("当前节点为"),o("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v("另一节点")])])])])])])},[],!1,null,null,null);e.default=v.exports}}]);