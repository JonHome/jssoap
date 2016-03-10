'use strict'
//应用入口
let path = require("path")
let express = require("express")
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser');
let app = express()
let server = require("http").createServer(app)

//中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../','public')))
//注册路由
app.use('/action', require("./router"))

module.exports = server