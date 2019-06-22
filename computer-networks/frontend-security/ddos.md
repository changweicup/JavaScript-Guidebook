# DDoS 攻击

DDoS 是英文 Distributed Denial of Service 的缩写，中文译作分布式拒绝服务。那什么又是拒绝服务（Denial of Service）呢？凡是能导致合法用户不能够正常访问网络服务的行为都算是拒绝服务攻击。也就是说拒绝服务攻击的目的非常明确，就是要阻止合法用户对正常网络资源的访问，从而达成攻击者不可告人的目的。

分布式拒绝服务攻击一旦被实施，攻击网络包就会从很多 DoS 攻击源犹如洪水般涌向受害主机。从而把合法用户的网络请求淹没，导致合法用户无法正常访问服务器的网络资源。

## 攻击分类

### 反射型

一般而言，我们会根据针对的协议类型和攻击方式的不同，把 DDoS 分成 SYN Flood、ACK Flood、Connection Flood、UDP Flood、NTP Flood、SSDP Flood、DNS Flood、HTTP Flood、ICMP Flood、CC 等各类攻击类型。

每一种攻击类型都有其特点，而反射型的 DDoS 攻击是一种新的变种。攻击者并不直接攻击目标服务的 IP，而是利用互联网的某些特殊服务开放的服务器，通过伪造被攻击者的 IP 地址向有开放服务的服务器发送构造的请求报文，该服务器会将数倍于请求报文的回复数据发送到被攻击 IP，从而对后者间接形成 DDoS 攻击。

在反射型攻击中，攻击者利用了网络协议的缺陷或者漏洞进行 IP 欺骗，主要是因为很多协议（例如 ICMP、UDP 等）对源 IP 不进行认证。同时，要达到更好的攻击效果，黑客一般会选择具有放大效果的协议服务进行攻击。

总结一下就是利用 IP 欺骗进行反射和放大，从而达到四两拨千斤的效果。目前常见的反射攻击有：DNS 反射攻击、NTP 反射攻击、SSDP 反射攻击等。

> 注：将源地址设为假的无法回应，即为 SYN Flood 攻击。制造流量和攻击目标收到的流量为 1:1，回报率低。

### 流量放大型

通过递归等手法将攻击流量放大的攻击类型，比如：以反射型中常见的 SSDP 协议为例，攻击者将 Search type 设置为 ALL。搜索所有可用的设备和服务，这种递归效果产生的放大倍数是非常大的，攻击者只需要以较小的伪造源地址的查询流量就可以制造出几十甚至上百倍的应答流量发送至目标。

### 混合型

在实际情况中，攻击者只求达到打垮对方的目的。发展到现在，高级攻击者已经不倾向使用单一的攻击手段。而是根据目标系统的具体环境灵动组合，发动多种攻击手段。

比如：TCP 和 UDP、网络层和应用层攻击同时进行，这样的攻击既具备了海量的流量，又利用了协议、系统的缺陷，尽其所能地展开攻势。对于被攻击目标来说，需要面对不同协议、不同资源的分布式的攻击，分析、响应和处理的成本就会大大增加。

### 脉冲波型

这是一种新型的 DDoS 攻击方法，给某些 DDoS 攻击解决方案带来了问题，因为它允许攻击者攻击以前认为是安全的服务器。之所以将这种新技术命名为脉冲波，是由于其攻击流量展现出来的图形看起来很像不连贯的重复的脉冲状。这类攻击通常呈现一个有上有下的斜三角形的形状，这个过程体现了攻击者正在慢慢地组装机器人并将目标对准待攻击的目标。

一次新的脉冲波攻击从零开始，在很短的时间跨度内达到最大值，然后归零，再回到最大值，如此循环重复，中间的时间间隔很短。脉冲波型 DDoS 相对难以防御，因为其攻击方式避开了触发自动化的防御机制。

### 链路泛洪

随着 DDoS 攻击技术的发展，又出现了一种新型的攻击方式 Link Flooding Attack，这种方式不直接攻击目标而是以堵塞目标网络的上一级链路为目的。对于使用了 IP Anycast 的企业网络来说，常规的 DDoS 攻击流量会被分摊到不同地址的基础设施，这样能有效缓解大流量攻击。所以攻击者发明了一种新方法，攻击至目标网络 traceroute 的倒数第二跳，即上联路由，致使链路拥塞。

## 常见攻击方法

DDoS 攻击从层次上可分为**网络层攻击**与**应用层攻击**，从攻击手法上可分为**快型流量攻击**与**慢型流量攻击**，但其原理都是造成资源过载，导致服务不可用。

### 网络层 DDoS 攻击

网络层 DDoS 攻击常见手段有：SYN Flood、ACK Flood、Connection Flood、UDP Flood、ICMP Flood、TCP Flood、Proxy Flood 等。

#### SYN Flood 攻击

SYN Flood 攻击是一种利用 TCP 协议缺陷，发送大量伪造的 TCP 连接请求，从而使得被攻击方资源耗尽（CPU 满负载或内存不足）的攻击方式。建立 TCP 连接，需要三次握手（客户端发送 SYN 报文、服务端收到请求并返回报文表示接受、客户端也返回确认，完成连接）。

SYN Flood 就是用户向服务器发送报文后突然死机或掉线，那么服务器在发出应答报文后就无法收到客户端的确认报文（第三次握手无法完成），这时服务器端一般会重试并等待一段时间（至少 30s）后再丢弃这个未完成的连接。

一个用户出现异常导致服务器的一个线程等待一会儿并不是大问题，但恶意攻击者大量模拟（构造源 IP 去发送 SYN 包）这种情况，服务器端为了维护数以万计的半连接而消耗非常多的资源，结果往往是无暇理睬正常客户的请求，甚至崩溃。从正常客户的角度看来，网站失去了响应，无法访问。

#### ACK Flood

ACK Flood 攻击是在 TCP 连接建立之后进行的。所有数据传输的 TCP 报文都是带有 ACK 标志位的，主机在接收到一个带有 ACK 标志位的数据包的时候，需要检查该数据包所表示的连接四元组是否存在。如果存在则检查该数据包所表示的状态是否合法，然后再向应用层传递该数据包。如果在检查中发现该数据包不合法（例如：该数据包所指向的目的端口在本机并未开放），则主机操作系统协议栈会回应 RST 包告诉对方此端口不存在。

这里，服务器要做两个动作：查表、回应 ACK/RST。对比主机以及防火墙在接收到 ACK 报文和 SYN 报文时所做动作的复杂程度，显然 ACK 报文带来的负载要小得多。这种攻击方式显然没有 SYN Flood 给服务器带来的冲击大，因此攻击者一定要用大流量 ACK 小包冲击才会对服务器造成影响。所以在实际环境中，只有当攻击程序每秒钟发送 ACK 报文的速率达到一定的程度，才能使主机和防火墙的负载有大的变化。

当发包速率很大的时候，主机操作系统将耗费大量的精力接收报文、判断状态，同时要主动回应 RST 报文，正常的数据包就可能无法得到及时的处理。这时候客户端的表现就是访问页面反应很慢，丢包率较高。但是状态检测的防火墙通过判断 ACK 报文的状态是否合法，借助其强大的硬件能力可以较为有效的过滤攻击报文。当然如果攻击流量非常大，由于需要维护很大的连接状态表同时要检查数量巨大的 ACK 报文的状态，防火墙也会不堪重负导致网络瘫痪。

目前 ACK Flood 并没有成为攻击的主流，而通常是与其他攻击方式组合在一起使用。

#### Connection Flood

Connection Flood 是典型的并且非常有效的利用小流量冲击大带宽网络服务的攻击方式。这种攻击的原理是利用真实的 IP 地址向服务器发起大量的连接，并且建立连接之后很长时间不释放。长期占用服务器的资源，造成服务器上残余连接 (WAIT 状态) 过多，效率降低，甚至资源耗尽，无法响应其它客户所发起的连接。

其中一种攻击方法是每秒钟向服务器发起大量的连接请求，这类似于固定源 IP 的 SYN Flood 攻击，不同的是采用了真实的源 IP 地址。通常这可以在防火墙上限制每个源 IP 地址每秒钟的连接数来达到防护目的。

但现在已有工具采用慢速连接的方式，也即几秒钟才和服务器建立一个连接，连接建立成功之后并不释放并定时发送垃圾数据包给服务器使连接得以长时间保持。这样一个 IP 地址就可以和服务器建立成百上千的连接，而服务器可以承受的连接数是有限的，这就达到了拒绝服务的效果。

#### UDP Flood 攻击

由于 UDP 是一种无连接的协议，因此攻击者可以伪造大量的源 IP 地址去发送 UDP 包，此种攻击属于大流量攻击。正常应用情况下，UDP 包双向流量会基本相等，因此在消耗对方资源的时候也在消耗自己的资源。

#### ICMP Flood 攻击

此攻击属于大流量攻击，其原理就是不断发送不正常的 ICMP 包（所谓不正常就是 ICMP 包内容很大），导致目标带宽被占用。但其本身资源也会被消耗，并且目前很多服务器都是禁 ping 的（在防火墙里可以屏蔽 ICMP 包），因此这种方式已经落伍。

#### Smurf 攻击

这种攻击类似于 ICMP Flood 攻击，但它能巧妙地修改进程。Smurf 攻击通过使用将回复地址设置成受害网络的广播地址的 ICMP 应答请求数据包，来淹没受害主机。最终导致该网络的所有主机都对此 ICMP 应答请求做出答复，导致网络阻塞。更加复杂的 Smurf 将源地址改为第三方的受害者，最终导致第三方崩溃。

### 应用层 DDoS 攻击

应用层 DDoS 攻击不是发生在网络层，是发生在 TCP 建立握手成功之后，应用程序处理请求的时候。常见的有：CC 攻击、DNS Flood、慢速连接攻击等。

#### CC 攻击

CC 攻击（Challenge Collapsar）是 DDoS 攻击的一种，其前身名为 Fatboy 攻击，也是一种常见的网站攻击方法。CC 攻击还有一段比较有趣的历史，Collapsar 是绿盟科技的一款防御 DDoS 攻击的产品品牌，Collapasar 在对抗拒绝服务攻击的领域内具有比较高的影响力和口碑。然而黑客为了挑衅，研发了一款 Challenge Collapasar 工具简称 CC，表示要向 Collapasar 发起挑战。

CC 攻击的原理就是借助代理服务器针对目标系统的消耗资源比较大的页面不断发起正常的请求，造成对方服务器资源耗尽，一直到宕机崩溃。因此在发送 CC 攻击前，我们需要寻找加载比较慢，消耗资源比较多的网页。比如：需要查询数据库的页面、读写硬盘的文件等。相比其它的 DDoS 攻击 CC 更有技术含量一些，这种攻击你见不到真实源 IP。见不到特别大的异常流量，但造成服务器无法进行正常连接。

#### Slowloris 攻击

Slowloris 是一种慢速连接攻击，Slowloris 是利用 Web Server 的漏洞或设计缺陷，直接造成拒绝服务。其原理是：以极低的速度往服务器发送 HTTP 请求，Apache 等中间件默认会设置最大并发链接数，而这种攻击就是会持续保持连接，导致服务器链接饱和不可用。Slowloris 有点类似于 SYN Flood 攻击，只不过 Slowloris 是基于 HTTP 协议。

Slowloris  PoC

```http
# 构造以下畸形 HTTP 请求包
GET / HTTP/1.1\r\n
Host: Victim host\r\n
User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.503l3; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MSOffice 12)\r\n
Content-Length: 42\r\n
```

完整的 HTTP 请求头结尾应该是两次的 `\r\n\r\n`，这里少了一次，因此服务器将会一直等待。

#### Slow Attack

Slow Attack 也是一种慢速 DoS 攻击，它通过消耗服务器的系统资源和连接数，导致 Web 服务器无法正常工作。常见的攻击方式包括 Slow Header、Slow Body 和 Slow Read。

1. Slow Header：正常的 HTTP Header 以两个 CLRF 结尾，通过发送只包含一个 CLRF 的畸形 Header 请求来占用 Web 服务器连接，从而达到消耗掉服务器所有可用的连接数。最终造成 Web 服务器资源饱和并拒绝新的服务。
2. Slow Read：向服务器请求很大的文件，然后通过设置 TCP 滑动窗口较小值，导致服务器以极慢的速度传输文件。这样，就会占用服务器大量的内存，从而造成拒绝服务。
3. Slow Body：在向服务器发送 HTTP Post 包时，指定一个非常大的 Content-Length 值，然后以极低的速度发包并保持连接不断，最终导致服务器连接饱和不可用。

Kali Linux 提供的专用测试工具 SlowHTTPTest 能够实现以上三种 Slow Attack 方式。

#### JavaScript DDoS

基于 JavaScript 的 DDoS 攻击利用的工具是普通网民的上网终端，这也意味着只要装有浏览器的电脑，都能被用作为 DDoS 攻击者的工具。当被操纵的浏览器数量达到一定程度时，这种 DDoS 攻击方式将会带来巨大的破坏性。

攻击者会在海量访问的网页中嵌入指向攻击目标网站的恶意 JavaScript 代码，当互联网用户访问该网页时，则流量被指向攻击目标网站。比较典型攻击事件：GitHub DDoS 攻击。

#### ReDoS 攻击

ReDoS (Regular expression Denial of Service)， 中文译作正则表达式拒绝服务攻击。开发人员使用了正则表达式来对用户输入的数据进行有效性校验，当编写校验的正则表达式存在缺陷或者不严谨时，攻击者可以构造特殊的字符串来大量消耗服务器的系统资源，从而造成服务器的服务中断或停止。 更详细介绍可参考：「浅析 ReDoS 的原理与实践」一文。

#### DNS Query Flood

DNS 作为互联网的核心服务之一，自然也是 DDoS 攻击的一大主要目标。DNS Query Flood 采用的方法是操纵大量傀儡机器，向目标服务器发送大量的域名解析请求。服务器在接收到域名解析请求时，首先会在服务器上查找是否有对应的缓存，若查找不到且该域名无法直接解析时，便向其上层 DNS 服务器递归查询域名信息。

通常，攻击者请求解析的域名是随机生成或者是网络上根本不存在的域名。由于在本地域名服务器无法查到对应的结果，本地域名服务器必须使用递归查询向上层域名服务器提交解析请求，引起连锁反应。解析过程给本地域名服务器带来一定的负载，每秒钟域名解析请求超过一定的数量就会造成域名服务器解析域名超时。

根据微软的统计数据，一台 DNS 服务器所能承受的动态域名查询的上限是每秒钟 9000 个请求。而一台 P3 的 PC 机上可以轻易地构造出每秒钟几万个域名解析请求，足以使一台硬件配置极高的 DNS 服务器瘫痪，由此可见 DNS 服务器的脆弱性。

### 无线 DDoS 攻击

#### Auth Flood 攻击

Auth Flood 攻击，即身份验证洪水攻击。该攻击目标主要针对那些处于通过验证和 AP 建立关联的关联客户端，攻击者将向 AP 发送大量伪造的身份验证请求帧（伪造的身份验证服务和状态代码），当收到大量伪造的身份验证请求超过所能承受的能力时，AP 将断开其他无线服务连接。

#### Deauth Flood 攻击

Deauth Flood 攻击即为取消验证洪水攻击，它旨在通过欺骗从 AP 到客户端单播地址的取消身份验证帧来将客户端转为未关联 / 未认证的状态。对于目前的工具来说，这种形式的攻击在打断客户无线服务方面非常有效和快捷。一般来说，在攻击者发送另一个取消身份验证帧之前，客户端会重新关联和认证以再次获取服务。攻击者反复欺骗取消身份验证帧就能使所有客户端持续拒绝服务。

#### Association Flood 攻击

Association Flood 攻击即为关联洪水攻击。在无线路由器或者接入点内置一个列表即为连接状态表，里面可显示出所有与该 AP 建立连接的无线客户端状态。它试图通过利用大量模仿和伪造的无线客户端关联来填充 AP 的客户端关联表，从而达到淹没 AP 的目的。

由于开放身份验证（空身份验证）允许任何客户端通过身份验证后关联。利用这种漏洞的攻击者可以通过创建多个到达已连接或已关联的客户端来模仿很多客户端，从而淹没目标 AP 的客户端关联表。

#### Disassociation Flood 攻击

Disassociation Flood 攻击即为取消关联洪水攻击，和 Deauth Flood 攻击表现方式很相似。它通过欺骗从 AP 到客户端的取消关联帧来强制客户端成为未关联 / 未认证的状态。一般来说，在攻击者发送另一个取消关联帧之前，客户端会重新关联以再次获取服务。攻击者反复欺骗取消关联帧就能使客户端持续拒绝服务。

Disassociation Broadcast 攻击和 Disassociation Flood 攻击原理基本一致，只是在发送程度及使用工具上有所区别。前者很多时候用于配合进行无线中间人攻击，而后者常用于目标确定的点对点无线 DoS，比如：破坏或干扰指定机构或部门的无线接入点等。

#### RF Jamming 攻击

RF Jamming 攻击即为 RF 干扰攻击。该攻击是通过发出干扰射频达到破坏正常无线通信的目的。而前面几种攻击主要是基于无线通信过程及协议的。RF 为射频，主要包括无线信号发射机及收信机等。

## 判断方法

### SYN 类

1. 服务器 CPU 占用率很高。
2. 出现大量的 SYN_RECEIVED 的网络连接状态。
3. 网络恢复后，服务器负载瞬时变高。网络断开后瞬时负载下将。

### UDP 类

1. 服务器 CPU 占用率很高。
2. 网卡每秒接受大量的数据包。
3. 网络 TCP 状态信息正常。

### CC 类

1. 服务器 CPU 占用率很高。
2. Web 服务器出现类似 Service Unavailable 提示。
3. 出现大量的 ESTABLISHED 的网络连接状态且单个 IP 高达几十个甚至上百个连接。
4. 用户无法正常访问网站页面或打开过程非常缓慢，软重启后短期内恢复正常，几分钟后又无法访问。

## 防御策略

### 网络层 DDoS 防御

1. 限制单 IP 请求频率。
2. 网络架构上做好优化，采用负载均衡分流。
3. 防火墙等安全设备上设置禁止 ICMP 包等。
4. 通过 DDoS 硬件防火墙的数据包规则过滤、数据流指纹检测过滤、及数据包内容定制过滤等技术对异常流量进行清洗过滤。
5. 采用 ISP 近源清洗，使用电信运营商提供的近源清洗和流量压制，避免全站服务对所有用户彻底无法访问。这是对超过自身带宽储备和自身 DDoS 防御能力之外超大流量的补充性缓解措施。

### 应用层 DDoS 防御

1. 优化操作系统的 TCP / IP 栈。
2. 应用服务器严格限制单个 IP 允许的连接数和 CPU 使用时间。
3. 编写代码时，尽量实现优化并合理使用缓存技术。尽量让网站静态化，减少不必要的动态查询。网站静态化不仅能大大提高抗攻击能力，而且还给骇客入侵带来不少麻烦，至少到现在为止关于 HTML 的溢出还没出现。
4. 增加 WAF（Web Application Firewall）设备，WAF 的中文名称叫做 Web 应用防火墙。Web 应用防火墙是通过执行一系列针对 HTTP / HTTPS 的安全策略来专门为 Web 应用提供保护的一款产品。
5. 使用 CDN / 云清洗，在攻击发生时，进行云清洗。通常云清洗厂商策略有以下几步：预先设置好网站的 CNAME，将域名指向云清洗厂商的 DNS 服务器；在一般情况下，云清洗厂商的 DNS 仍将穿透 CDN 的回源的请求指向源站，在检测到攻击发生时，域名指向自己的清洗集群，然后再将清洗后的流量回源。
6. CDN 仅对 Web 类服务有效，针对游戏类 TCP 直连的服务无效。这时可以使用 DNS 引流 + ADS (Anti-DDoS System) 设备来清洗，还有在客户端和服务端通信协议做处理（如：封包加标签，依赖信息对称等）。

DDoS 攻击究其本质其实是无法彻底防御的，我们能做得就是不断优化自身的网络和服务架构，来提高对 DDoS 的防御能力。

---

**参考资料：**

* [浅谈 DDoS 攻击与防御](https://juejin.im/entry/5b7a21256fb9a01a031aef67)