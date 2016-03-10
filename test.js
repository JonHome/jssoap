'use strict'
const utils = require("./server/utils")
const Authorkey = "Tu4ye7re639RTY8Uvxirt05"
const md5 = utils.md5
const dateFormat = utils.dateFormat

let date = dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")
let authdKey = md5(date+Authorkey)

console.log(date,authdKey)

github.com/SublimeText/Tag