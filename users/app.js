const { default: axios } = require('axios');
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

app.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`);
  res.end();
});

app.get('/auth', async (req, res) => {
  let data = await axios.get(`http://${process.env.AUTH_ADDRESS}/auth`);
  res.send(data.data);
  res.end();
});

app.get('/hello', async (req, res) => {
  let data = await axios.get(
    `http://${process.env.AUTH_SERVICE_SERVICE_HOST}:5000/hello`
  );
  res.send(data.data);
  res.end();
});

app.listen(8080, () => console.log('server start on 8080 port'));
