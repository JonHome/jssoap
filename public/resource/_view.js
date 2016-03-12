define(function(require){	
	require("css!ratchet")
	require("css!fontawesome")
	require("css!project")
	var Vue = require("Vue")
	var VueRouter = require("VueRouter")
	var fastclick = require("fastclick")
	var template = require("utils").template
	var $ = require("jquery")
	Vue.use(VueRouter)
	window.notify = require("./Notification")
	window.router = new VueRouter()
	window.ajax = function (url,data,success,failure){
		$.post(url,data,success).error(function(xhr){
			var msg = ""
			try{
				var result = JSON.parse(xhr.responseText)
				msg = result.message
			}catch(e){
				msg = xhr.responseText || "未知错误!"
			}
			notify.error({
				duration : 1000,
				message : msg
			})
			failure && failure(xhr)
		})
	}
	fastclick.attach(document.body)
	var App = Vue.extend({
		replace : false,
		data : function(){
			return {
				title : "",
				label : "",
				leftbar : [],
				toolbar : [],
				showFooter : true,
				navigator : [
					{name:"Blank",link:"/Blank",icon:"icon fa fa-home",count:0},
					{name:"一键检测",link:"/FastCheck",icon:"icon fa fa-home",count:0}
				]
			}
		},
		compiled : function(){
			$("#app").removeClass("init")
		},
		events : {
			init : function(data){
				this.title = data.title
				this.label = data.label
				this.leftbar = data.leftbar
				this.toolbar = data.toolbar
				if("showFooter" in data){
					this.showFooter = data.showFooter
				}else{
					this.showFooter = true
				}
			}
		},
		methods : {
			scroll : function(content){
				if(content.scrollTop+document.documentElement.clientHeight+100 < content.scrollHeight)return
				this.$broadcast("scroll")
			}
		}
	})
	router.map({
		"/Blank" : {component : require("components/Blank")},
		"/FastCheck" : {component : require("components/FastCheck")}
	})
	router.redirect({
		"*" : "/Blank"
	})
	router.start(App,"#app")
	return router
})