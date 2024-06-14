const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`服务器启动成功`);
})
 