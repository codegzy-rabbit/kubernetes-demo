const express = require('express');

const app = express();

// 解决跨域问题
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', '*');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.get('/auth', (req, res) => {
  res.send('Authorization Success');
  res.end();
});

app.get('/hello', (req, res) => {
  res.send('Hello Success');
  res.end();
});

app.listen(5000, () => console.log('server start on 5000 port'));
