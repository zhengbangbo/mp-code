# 微信小程序获取 Code

该工具在本地开启一个接口（默认：[http://localhost:3000](http://localhost:3000)），连接微信开发者工具，调用 `wx.login` 接口，获取登录凭证（code）。

* 使用场景：小程序接口自动化测试
* 限制：只能本地使用，无法在服务器上运行。可以通过本地暴露接口的方式解决。

## 使用

```shell
pnpm i
pnpm start
```

开启微信开发者工具的「服务端口」
![微信开发者工具开启服务端口](mp1.png)

### GET `/`

* 速度快
* 需要本地开启微信开发者工具并打开项目

### GET `/launch?projectPath=xxxxx`

* 速度慢
* 可以选择不同的项目

🌰：`http://localhost:3000/launch?projectPath=/Users/xxxx/WeChatProjects/miniprogram`
