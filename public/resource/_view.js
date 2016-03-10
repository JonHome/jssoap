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
					{name:"首页",link:"/home",icon:"icon fa fa-home",count:0},
					{name:"装机",link:"/install",icon:"icon fa fa-gears",count:6},
					{name:"修障",link:"/fix",icon:"icon fa fa-wrench",count:1},
					{name:"营销",link:"/business",icon:"icon fa fa-tag",count:42},
					{name:"预警",link:"/warning",icon:"icon fa fa-warning",count:0}
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
			finish : function(){
			//	androidObj.finishView()
			},
			scroll : function(content){
				if(content.scrollTop+document.documentElement.clientHeight+100 < content.scrollHeight)return
				this.$broadcast("scroll")
			}
		}
	})
	router.map({
		"/home" 			: {component : require("components/Home")},
		"/home-xingchengguihua" 			: {component : require("components/Home-xingchengguihua")},
		"/home-yunweiguanli" 			: {component : require("components/Home-yunweiguanli")},
		"/home-yunweiguanli-detail" 			: {component : require("components/Home-yunweiguanli-detail")},
		"/login" 			: {component : require("components/Login")},
		"/more" 			: {component : require("components/More")},
		//"/cesu" 			: {component : require("components/Cesu")},
		"/install" 			: {component : require("components/Install")},
		"/installDetail" 	: {component : require("components/InstallDetail")},
		"/installDetail0" 	: {component : require("components/InstallDetail0")},
		"/installDetail1" 	: {component : require("components/InstallDetail1")},
		"/installDetail2" 	: {component : require("components/InstallDetail2")},
		"/installDetail3" 	: {component : require("components/InstallDetail3")},
		"/installDetail4" 	: {component : require("components/InstallDetail4")},
		"/installDetail-peizhijiancha" 		: {component : require("components/InstallDetail-peizhijiancha")},
		"/installDetail-yanshenfuwu" 		: {component : require("components/InstallDetail-yanshenfuwu")},
		"/installDetail-cesu" 				: {component : require("components/InstallDetail-cesu")},
		"/installDetail-chuanhao" 			: {component : require("components/InstallDetail-chuanhao")},
		"/installDetail-paizhao" 			: {component : require("components/InstallDetail-paizhao")},
		"/installDetail-cailiao1" 			: {component : require("components/InstallDetail-cailiao1")},
		"/installDetail-cailiao-add" 		: {component : require("components/InstallDetail-cailiao-add")},
		"/installDetail-cailiao-add-1" 		: {component : require("components/InstallDetail-cailiao-add-1")},
		"/installDetail-cailiao-modify" 	: {component : require("components/InstallDetail-cailiao-modify")},
		"/installDetail-zaixiangengxian" 	: {component : require("components/InstallDetail-zaixiangengxian")},
		"/business" 		: {component : require("components/Business")},
		"/businessDetail" 	: {component : require("components/BusinessDetail")},
		"/businessDetail1" 	: {component : require("components/BusinessDetail1")},
		"/fix" 				: {component : require("components/Fix")},
		"/fixDetail" 	: {component : require("components/FixDetail")},
		"/fixDetail0" 	: {component : require("components/FixDetail0")},
		"/fixDetail3" 	: {component : require("components/FixDetail3")},
		"/fixDetail4" 	: {component : require("components/FixDetail4")},
		"/fixDetail-cesu" 			: {component : require("components/FixDetail-cesu")},
		"/fixDetail-cailiao1" 			: {component : require("components/FixDetail-cailiao1")},
		"/fixDetail-cailiao-add" 		: {component : require("components/FixDetail-cailiao-add")},
		"/fixDetail-cailiao-add-1" 		: {component : require("components/FixDetail-cailiao-add-1")},
		"/fixDetail-cailiao-modify" 	: {component : require("components/FixDetail-cailiao-modify")},
		"/fixDetail-paizhao" 	: {component : require("components/FixDetail-paizhao")},
		"/fixDetail-peizhijiancha" 		: {component : require("components/FixDetail-peizhijiancha")},
		"/warning" 				: {component : require("components/Warning")},
		"/warningDetail" 	: {component : require("components/WarningDetail")},
		"/warningDetail0" 	: {component : require("components/WarningDetail0")},
		"/warningDetail3" 	: {component : require("components/WarningDetail3")},
		"/warningDetail4" 	: {component : require("components/WarningDetail4")},
		"/warningDetail-cesu" 			: {component : require("components/WarningDetail-cesu")},
		"/warningDetail-cailiao1" 			: {component : require("components/WarningDetail-cailiao1")},
		"/warningDetail-cailiao-add" 		: {component : require("components/WarningDetail-cailiao-add")},
		"/warningDetail-cailiao-add-1" 		: {component : require("components/WarningDetail-cailiao-add-1")},
		"/warningDetail-cailiao-modify" 	: {component : require("components/WarningDetail-cailiao-modify")},
		"/warningDetail-paizhao" 	: {component : require("components/WarningDetail-paizhao")},
		"/warningDetail-peizhijiancha" 		: {component : require("components/WarningDetail-peizhijiancha")},
		"/me" 				: {component : require("components/Me")},
		"/me-feedback" 				: {component : require("components/Me-feedback")},
		"/me-password" 				: {component : require("components/Me-password")},
		"/me-help" 				: {component : require("components/Me-help")},
		"/me-help-text" 				: {component : require("components/Me-help-text")},
		"/me-uplog"                 : {component : require("components/Me-uplog")},
		"/me-message"                 : {component : require("components/Me-message")},
		"/me-message-detail"                 : {component : require("components/Me-message-detail")},
		"/yijianjiance" 			: {component : require("components/Yijianjiance")},
		"/yijianxiufu" 			: {component : require("components/Yijianxiufu")}
	})
	router.redirect({
		"*" : "/login"
	})
	router.start(App,"#app")
	return router
})