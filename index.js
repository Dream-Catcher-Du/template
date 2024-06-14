const express = require('express')
const app = express()
const port = 3000

// 开放所有文件
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`服务器启动成功`);
})