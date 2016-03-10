'use strict'
//http路由
const agent = require("superagent")
const express = require('express')
const router = express.Router()
const os = require("os")
const osutils = require("os-utils")
const soap = require("./Class/Soap")
//soap接口转发业务

//查询数据字典
router.get("/getDictionary",(req,res)=>{
	if(!req.query.dictionary){
		return setResponse(new Error("请提供字典编号"),null,res)
	}
	soap.getDictionary({
		operator : "sa",
		dictionary : req.query.dictionary
	},(err,result)=>{
		setResponse(err,result,res)
	})
})
//获取检测项
router.get("/getActivityId",(req,res)=>{
	soap.getActivityId({
		operator : "sa"
	},(err,result)=>{
		setResponse(err,result,res)
	})
})

//查看服务器负荷
router.get("/env",(req,res)=>{
	res.send(process.env)
})
router.get("/usage",(req,res)=>{
	//res.send(process.memoryUsage())
	osutils.cpuUsage((v)=>{
		let sysinfo = {
			'hostname'   : os.hostname(),
			'systemtype' : os.type(),
			//'release'    : os.release(),
			//'uptime'     : os.uptime(),
			//'loadavg'    : os.loadavg(),
			'totalmem'   : os.totalmem(),
			'freemem'    : os.freemem(),
			//'cpus'       : os.cpus(),
			'cpuUsage'   : v,
			'process'    : process.memoryUsage()
		}
		res.send(sysinfo)
	})
})

function setResponse(err,result,res){
	res.setHeader('Content-Type', 'application/json')
	if(err){
		res.status(500)
		res.send({
			statu : 0,
		//	stack : err.stack,
			message : err.message
		})
	}else{
		res.send({
			statu : 1,
			message : "ok",
			data : result
		})
	}
}
module.exports = router