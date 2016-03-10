'use strict'

let cluster = require('cluster')
let http = require('http')
let numCPUs = require('os').cpus().length
let colors = require('colors')
let serverDomain = require('domain').create()
let restart = []
let setting = require('./package.json')
numCPUs  = 1//numCPUs > 4 ? 4 : numCPUs;
if (cluster.isMaster){
	console.log(">>master start".bold.green);
	for(var i=0 ; i < numCPUs ; i++){
		forkNewProcess(cluster);
	}
	cluster.on('listening',function(worker,address){
		console.log(('>>listening: worker [' + worker.process.pid +'], Address: '+address.address+":"+address.port).green);
	});
	cluster.on('exit', function(worker, code, signal) {
		console.log(('>>worker [' + worker.process.pid + '] died,try to fork an new one').red);
		if(isTooFrequently()){
			console.log('>>too frequently restarted'.bold.red);
			restart = [];
		}
		forkNewProcess(cluster);
	});
}else{
	let app = require('./server/app')
	let connect = null;
    serverDomain.run(function(){
    	let host = setting.server.host
    	let port = setting.server.port
		connect = app.listen(port, host, function() {
			console.log(('>>>>server starts at ' + host + ' and ' + port + '  with http').blue);
		})
    });
    serverDomain.on("error",function(err){
    	console.log("Got Process Error========".red);
    	console.log(err)
    	console.log(err.stack)
    	console.log(("Got Process Error End,Process[#"+process.pid+"] Exit========").red);
    	process.send({
			message : err.message,
			stack : err.stack,
			datetime : new Date - 0
    	});
    	process.exit(1);
    });
}

function forkNewProcess(cluster){
	let process = cluster.fork();
	process.on("message",function(msg){
		//console.log("子进程消息")
		//console.log(msg)
		logErrors(msg);
	});
	return process;
}

var errors = [];
function logErrors(err){
	let len = errors.push(err);
	/*
	if(len > 10){
		errors = errors.slice(-10);
	}
	*/
	return errors;
}
//每小时检查一次错误，如果有错则吧错误信息推送到邮件后清除错误
setInterval(function(){
	if(errors.length){
		var text = JSON.stringify(errors);
		var html = text;
		mail("两达图近期错误报告",text);
		errors = [];
	}
},1000*60*60);

var limit = 10;
var during = 60000;
function isTooFrequently(){
	var time = new Date - 0;
	var length = restart.push(time);
	if(length > limit){
		restart = restart.slice(limit * -1);
	}
	return restart.length >= limit && restart[restart.length-1] - restart[0] < during;
}