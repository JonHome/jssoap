/*
工具类
*/
define(function(require){
	function Alert(text){	
		var $ = require("jquery");
		Dialog({
			title : "有一些小麻烦",
			content: text,
			width : 400,
			fixed : true,
			okValue : "知道了",
			ok:function(){	
				return true;
			}
		}).showModal();
	}
	function get(url,callback,errCallback){	
		$.get(url).done(function(msg){	
			callback && callback(msg);
		}).fail(function(ajax,err,msg){	
			msg = ajax.responseText ||msg;
			utils.alert(msg);
			errCallback && errCallback(ajax,err,msg)
		})
	}
	function post(url,data,callback,errCallback){	
		$.post(url,data).done(function(msg){	
			callback && callback(msg);
		}).fail(function(ajax,err,msg){	
			msg = ajax.responseText ||msg;
			utils.alert(msg);
			errCallback && errCallback(ajax,err,msg)
		})
	}
	function update(url,data,callback,errCallback){	
		$.ajax({	
			url : url,
			data : data,
			method : "put"
		}).done(function(msg){	
			callback && callback(msg);
		}).fail(function(ajax,err,msg){	
			msg = ajax.responseText ||msg;
			utils.alert(msg);
			errCallback && errCallback(ajax,err,msg)
		});
	}
	function del(url,callback,errCallback){	
		$.ajax({	
			url : url,
			method : "delete"
		}).done(function(msg){	
			callback && callback(msg);
		}).fail(function(ajax,err,msg){	
			msg = ajax.responseText ||msg;
			utils.alert(msg);
			errCallback && errCallback(ajax,err,msg)
		});
	}
	//###########################
	//自然语言排序
	//###########################
	//GITHUB：https://github.com/overset/javascript-natural-sort/blob/master/naturalSort.js
	/*
	* Natural Sort algorithm for Javascript - Version 0.8 - Released under MIT license
	* Author: Jim Palmer (based on chunking idea from Dave Koelle)
	*/
	function naturalSort(a, b) {
		var re = /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[\da-fA-F]+$|\d+)/g,
			sre = /^\s+|\s+$/g, // trim pre-post whitespace
			snre = /\s+/g, // normalize all whitespace to single ' ' character
			dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
			hre = /^0x[0-9a-f]+$/i,
			ore = /^0/,
			i = function(s) {
				return (naturalSort.insensitive && ('' + s).toLowerCase() || '' + s).replace(sre, '');
			},
			// convert all to strings strip whitespace
			x = i(a) || '',
			y = i(b) || '',
			// chunk/tokenize
			xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
			yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
			// numeric, hex or date detection
			xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && Date.parse(x)),
			yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null,
			normChunk = function(s, l) {
				if (!s) return 0;
				// normalize spaces; find floats not starting with '0', string or 0 if not defined (Clint Priest)
				return (!s.match(ore) || l == 1) && parseFloat(s) || s.replace(snre, ' ').replace(sre, '') || 0;
			},
			oFxNcL, oFyNcL;
		// first try and sort Hex codes or Dates
		if (yD) {
			if (xD < yD) {
				return -1;
			} else if (xD > yD) {
				return 1;
			}
		}
		// natural sorting through split numeric strings and default strings
		for (var cLoc = 0, xNl = xN.length, yNl = yN.length, numS = Math.max(xNl, yNl); cLoc < numS; cLoc++) {
			oFxNcL = normChunk(xN[cLoc], xNl);
			oFyNcL = normChunk(yN[cLoc], yNl);
			// handle numeric vs string comparison - number < string - (Kyle Adams)
			if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
				return (isNaN(oFxNcL)) ? 1 : -1;
			}
			// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
			else if (typeof oFxNcL !== typeof oFyNcL) {
				oFxNcL += '';
				oFyNcL += '';
			}
			if (oFxNcL < oFyNcL) {
				return -1;
			}
			if (oFxNcL > oFyNcL) {
				return 1;
			}
		}
		return 0;
	}
	function dateFormat(date, format) {
		if (typeof(date) == "string") date = date.replace(/-/ig, "/");
		if (Object.prototype.toString.apply(date) != '[object Date]') date = new Date(date);
		var o = {
			"M+": date.getMonth() + 1, //month
			"d+": date.getDate(), //day
			"h+": date.getHours(), //hour
			"m+": date.getMinutes(), //minute
			"s+": date.getSeconds(), //second
			"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
			"S": date.getMilliseconds() //millisecond
		}
		if (/(y+)/.test(format))
			format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		return format;
	};

	function trim(text) {
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		return text == null ?
			"" :
			(text + "").replace(rtrim, "");
	};
	//异步执行函数
	function offloadFn(fn){
		setTimeout(fn, 0);
	};
	///*
	//字符串模板组件，利用函数字面量的特征提取函数注释，以获得一种简单的在js中插入各种携带特殊字符的字符串的方式
	//在低版本firefox中由于提取函数字面量会过滤掉注释，所以不能使用
	//
	//Example:
	//var div = Template(function(){
	//	/*
	//		<div class="xxx">yyy</div>
	//	*/
	//});
	//
	//2015 / 9 / 10	张旭
	//*/
	function Template(tmpl) {
		var regEx = new RegExp("/\\*([\\S\\s]*)\\*/", "mg");
		tmpl = tmpl + "";
		var matches = tmpl.match(regEx) || [];
		var result = [];
		for (var i = 0; i < matches.length; i++) {
			result.push(matches[i].replace(regEx, "$1"));
		}
		return result.join("");
	};
	//获取一个唯一id
	var count = 0x861005;
	function getUniqueID(prefix) {
		prefix = prefix || 'Z';
		return prefix + count++;
	};
	var utils = {
		alert : Alert,
		get : get,
		post : post,
		update : update,
		delete : del,
		template : Template,
		getUniqueID : getUniqueID,
		offloadFn : offloadFn,
		trim : trim,
		naturalSort : naturalSort,
		dateFormat : dateFormat
	};
	return utils;
});