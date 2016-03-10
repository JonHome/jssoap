'use strict'
const _crypto = require("crypto")
let utils = {}
utils.md5 = function(data){
		var Buffer = require("buffer").Buffer;
		var buf = new Buffer(data);
		var str = buf.toString("binary");
		return _crypto.createHash("md5").update(str).digest("hex");
}
utils.dateFormat = function(date,format){
	if(typeof(date)=="string")date = date.replace(/-/ig,"/");
	if(Object.prototype.toString.apply(date) != '[object Date]')date = new Date(date);
	var o = {
		"M+" : date.getMonth()+1, //month
		"d+" : date.getDate(),    //day
		"h+" : date.getHours(),   //hour
		"m+" : date.getMinutes(), //minute
		"s+" : date.getSeconds(), //second
		"q+" : Math.floor((date.getMonth()+3)/3),  //quarter
		"S" : date.getMilliseconds() //millisecond
	 }
		if(/(y+)/.test(format)) 
		format=format.replace(RegExp.$1,(date.getFullYear()+"").substr(4 - RegExp.$1.length));   
		for(var k in o)if(new RegExp("("+ k +")").test(format))   
			format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));   
		return format;  
}
utils.getAuthInfo = function(){
	const Authorkey = "Tu4ye7re639RTY8Uvxirt05"
	let date = utils.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss")
	let authdKey = utils.md5(date+Authorkey)
	return {
		date : date,
		key : authdKey
	}
}
module.exports = utils