const express = require('express')
const app = express()
const port = 80;

// 开放所有文件
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * 为了让Vercel将Express转变为无服务器功能，
 * 必须导出Express应用。
 */
module.exports = app;