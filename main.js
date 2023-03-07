const automator = require('miniprogram-automator')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	// 连接开发者工具
	// https://developers.weixin.qq.com/miniprogram/dev/devtools/auto/automator.html#automator-connect
	automator.connect({
		wsEndpoint: 'ws://localhost:9420',
	}).then(async miniProgram => {
		const data = await miniProgram.callWxMethod('login')
		console.log(data);
  	res.send(data)
		miniProgram.disconnect()
	})
})

app.get('/launch', (req, res) => {
	// 获取 req 中的参数
	const { projectPath } = req.query
	// 启动并连接开发者工具
	// https://developers.weixin.qq.com/miniprogram/dev/devtools/auto/automator.html#automator-launch
	automator.launch({
		// NOTE: 请根据实际情况修改
		projectPath,
	}).then(async miniProgram => {
		const data = await miniProgram.callWxMethod('login')
		console.log(data);
		res.send(data)
		miniProgram.close()
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

