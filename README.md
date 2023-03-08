# 微信小程序获取 Code

该工具在本地开启一个接口（默认：[http://localhost:3000](http://localhost:3000)），连接微信开发者工具，调用 `wx.login` 接口，获取登录凭证（code）。

* 使用场景：小程序接口自动化测试
* 限制：只能本地使用，无法在服务器上运行。可以通过本地暴露接口的方式解决。



## 使用



微信开发者工具开启「服务端口」
![微信开发者工具开启服务端口](mp1.png)

[命令行开启「自动化监听端口」](https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html#%E5%BC%80%E5%90%AF%E8%87%AA%E5%8A%A8%E5%8C%96)


```shell
# macOS: <安装路径>/Contents/MacOS/cli
# Windows: <安装路径>/cli.bat
./cli auto --project /Users/xxxxxx/WeChatProjects/miniprogram --auto-port 9420
```

克隆项目、安装依赖并启动

```shell
pnpm i
pnpm start
```

### GET `/`

* 速度快
* 需要提前本地开启微信开发者工具并打开项目

### GET `/launch?projectPath=xxxxx`

* 速度慢
* 可以根据传入值打开不同的项目

🌰：`http://localhost:3000/launch?projectPath=/Users/xxxx/WeChatProjects/miniprogram`


## 更进一步

- [命令行调用](https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html)
- [HTTP调用](https://developers.weixin.qq.com/miniprogram/dev/devtools/http.html)
- 
