/*
* 使用方式
* 在build文件夹下找到 webpack.dev.config.js 中找到
  watchOptions: {
    poll: config.dev.poll,
  }
  然后在后面添加:
  ,
  before(app) {
    app.use(require('./devDataRouter'));
  }
* */
const express = require('express');
var appData = require('../data.json')//加载本地数据文件
var seller = appData.seller//获取对应的本地数据
var goods = appData.goods
var ratings = appData.ratings

var router = express.Router();

router.get('/api/seller', (req, res) => {
  res.json({
    error: 0,
    data: seller
  })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
}),
router.get('/api/goods', (req, res) => {
  res.json({
    error: 0,
    data: goods
  })
}),
router.get('/api/ratings', (req, res) => {
  res.json({
    error: 0,
    data: ratings
  })
})

module.exports =router;

