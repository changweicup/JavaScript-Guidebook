## DNS域名解析协议

DNS（DomainNameSystem）系统用于命名阻止到域层次结构中的计算机和网络服务。

使用 IP 地址而非使用域名进行通信的原因：

* IP 地址是固定长度，IPv4 是32位，IPv6 是128位，而域名是变长的，不便于计算机处理
* IP 地址对于用户来说不方便记忆，但域名便于用户使用

总结来说就是 IP 面向主机，域名面向用户。

⛳️ ***hosts***

域名和 IP 的对应关系保存在一个叫 hosts 文件中。

### DNS系统

1. 一个组织的系统管理机构，维护系统内的每个主机的IP和主机名的对应关系
2. 如果新计算机接入网络，将这个信息注册到数据库中
3. 用户输入域名的时候，会自动查询DNS服务器，由DNS服务器检索数据库，得到对应的IP地址 
   我们可以通过命令查看自己的 `hosts` 文件

在域名解析的过程中仍然会优先查找 hosts 文件的内容。

### DNS域名结构

#### 域名的层次结构

**域名系统必须要保持唯一性。**

1. 每个域名都是一个标号序列，用字母（大小写等价）、数字（0-9）和连接符（-）组成
2. 标号序列总长度不能超过255个字符，它由点号分割成一个个的标号
3. 每个标号应该在63个字符之内，每个标号都可以堪称一个层次的域名
4. 级别最低的域名写在左边，级别最高的域名写在右边

域名服务是基于 UDP 实现的，服务器的端口号为53。

🌰 例如：

`www.google.com`

* `com` 一级域名，表示这是个企业域名
* `google` 二级域名，表示公司名
* `www` 万维网

#### 域名的分级

域名可以划分为各个子域，子域还可以继续划分为子域的子域，这样就形成了顶级域、二级域、三级域等。

| 顶级域名     | 标识                                                         |
| ------------ | ------------------------------------------------------------ |
| 国家顶级域名 | 中国 `cn`；美国 `us`；英国 `uk`                              |
| 通用顶级域名 | 公司企业 `com`；教育机构 `edu`；政府部门 `gov`；国际组织 `int`；军事部门 `mil`；网络 `net`；非盈利组织 `org` |
| 反向域名     | arpa 用于 PTR 查询（IP 地址转换为域名）                      |

### 域名服务器

域名是分层结构，域名服务器也是对应的层级结构。

域名服务器 => 装有域名系统的主机

由高到低进行层次划分。

| 分类           | 作用                                                         |
| -------------- | ------------------------------------------------------------ |
| 根域名服务器   | 最高层次的域名服务器，本地域名服务器解析不了的域名就会向其求助 |
| 顶级域名服务器 | 负责管理在该顶级域名服务器下注册的耳机线域名                 |
| 权限域名服务器 | 负责一个区的域名解析工作                                     |
| 本地域名服务器 | 当一个主机发出 DNS 查询请求时，这个查询请求首先发给本地域名服务器 |

⚠️ 一个域名服务器所负责的范围，或者说有管理权限的范围，就称为区。

> 1. 每个层的域名上都有自己的域名服务器，最顶层的是根域名服务器
> 2. 每一级域名服务器都知道下级域名服务器的IP地址
> 3. 为了容灾, 每一级至少设置两个或以上的域名服务器

### 域名解析过程

1. 输入域名后, 先查找自己主机对应的域名服务器，域名服务器先查找自己的数据库中的数据. 

2. 如果没有， 就向上级域名服务器进行查找， 依次类推 

3. 最多回溯到根域名服务器, 肯定能找到这个域名的IP地址 
4. 域名服务器自身也会进行一些缓存， 把曾经访问过的域名和对应的IP地址缓存起来, 可以加速查找过程 

具体描述如下：

1. 主机先向本地域名服务器进行递归查询 
2. 本地域名服务器采用迭代查询，向一个根域名服务器进行查询 
3. 根域名服务器告诉本地域名服务器，下一次应该查询的顶级域名服务器的IP地址 
4. 本地域名服务器向顶级域名服务器进行查询 
5. 顶级域名服务器告诉本地域名服务器，下一步查询权限服务器的IP地址 
6. 本地域名服务器向权限服务器进行查询 
7. 权限服务器告诉本地域名服务器所查询的主机的IP地址 
8. 本地域名服务器最后把查询结果告诉主机 
---

**参考资料：**

* [DNS（域名解析协议）详解](https://blog.csdn.net/baidu_37964071/article/details/80500825)
* [从输入 URL 到页面加载完成的过程中都发生了什么](https://www.tuicool.com/articles/V7JN32Z)