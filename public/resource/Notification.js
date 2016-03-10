/*
消息通知组件
message : 通知提醒标题
description : 通知提醒内容（移动端不实现）
btn			: 自定义关闭按钮
id			: 通知的钩子
onClose		: 点击关闭时触发 Function
duration	: 自动关闭的时间。如果为0表示不自动关闭
*/
define(function(require){
	var $ = require("jquery")
	var ejs = require("ejs")
	var utils = require("./utils")
	var warpper = $("<div class='notifications'></div>").appendTo("body")
	var notices = {}
	function notice(args){
		var template = utils.template(function(){/*<div class="notification <%=type%>">
			<i class="fa fa-close close"></i>
			<%=message%>
		</div>*/})
		template = ejs.render(template,args)
		var notification = $(template).appendTo(warpper)
		utils.offloadFn(function(){
			notification.addClass("active")
		})
		var duration = args.duration
		if(duration !== 0)duration = duration*1 || 1000
		if(duration !== 0){
			setTimeout(function(){
				notification.close()
			},duration)
		}
		notices[args.id] = notice
		notification.close = function(){
			notification.removeClass("active")
			setTimeout(function(){
				notification.remove()
				args.onClose && args.onClose()
			},300)
		}
		notification.delegate(".close","click",function(){
			notification.close()
		})
		return notification
	}
	function close(noticeId){
		var notification = notices[noticeId]
		notification.removeClass("active")
		setTimeout(function(){
			notification.remove()
		},300)
	}
	var api = {
		open: function open(args) {
			args.id = args.id || utils.getUniqueID()
			return notice(args)
		}
	}
	"success,error,info,warn".split(",").forEach(function(row){
		api[row] = function(args){
			args.type = row;
			return api.open(args);
		}
	})
	return api;
});