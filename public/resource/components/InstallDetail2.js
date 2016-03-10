define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	var Sider = require("Sider")
	return Vue.extend({	
		template : template(function(){/*
			<div class="content detail" style="background:#fff;margin-bottom:70px;">
				<detailmenu 
					:toggle="chgFilter"
					:show.sync="showFilter" v-if="showFilter">
					<button class="btn btn-primary btn-block" v-if="!pending&&step===2" @click="baozhong">报钟</button>
					<button class="btn btn-primary btn-block" v-if="!pending&&step===3" @click="chufa">触发</button>
					<button class="btn btn-primary btn-block" v-if="!pending&&step===4" @click="jungong">竣工</button>
					<button disabled class="btn btn-primary btn-block" v-if="!pending&&step===5">已完成</button>
					<button disabled class="btn btn-primary btn-block" v-if="pending"><i class="fa fa-spinner fa-spin"></i></button>
				</detailmenu>
				<div style="padding:10px" class="step">
					<ul>
						<li class="active">接单<span></span></li>
						<li :class="step>1?'active':''">跳纤<span></span><div class="line"></div></li>
						<li :class="step>2?'active':''">报钟<span></span><div class="line"></div></li>
						<li :class="step>3?'active':''">触发<span></span><div class="line"></div></li>
						<li :class="step>4?'active':''">竣工<span></span><div class="line"></div></li>
					</ul>
				</div>
				<detailtab></detailtab>
			</div>
		*/}),
		data : function(){
			return {
				pending : false,
				showFilter : false,
				step : 2,
				list : [
					{key:"装机地址",value:"南环东路9号2栋614室"},
					{key:"原装机地址",value:"南环东路9号2栋614室"},
					{key:"用户",value:"朱小平"},
					{key:"现接入号",value:"sza812946"},
					{key:"施工类型名称",value:"常规资源维护"},
					{key:"施工类型",value:"iTv光上行e8-c接入"},
					{key:"预约时间开始",value:"2012.5.18 13:00"},
					{key:"预约时间结束",value:"2012.5.18 17:00"},
					{key:"宽带帐号",value:"sza812946"}
				]
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "工单详情",
				label : "装机",
				showFooter : false,
				toolbar : [
					{	
						"icon" : "fa fa-cog",
						"method" : function(){
						//	this.showSider()
							this.chgFilter(true)
						}.bind(this)

					}
				],
				leftbar : [
					{
						"icon" : "icon icon-left-nav",
						"method" : function(){
							this.back()
						}.bind(this)
					}
				]
			})
		},
		events : {
		},
		methods : {
			back : function(){	
				location.hash="!/install"
			},
			chgFilter : function(state){
				this.showFilter = state
			},
			showSider : function(){	
				var list = [	
					{
						label : "",
						methods : "反馈,请求,转派,一键检测,退单".split(",")
					},
					{
						label : "资料核查",
						methods : "用户信息查询,线路信息查询,宽带帐号信息查询,开通工单信息查询,ITV用户信息查询,EPON信息查询,IPTV信息查询".split(",")
					},
					{
						label : "网络核查",
						methods : "配置检查,触发网管,PON端口重启,PON端口激活,用户帐号绑定,用户帐号解绑,用户帐号激活,密码复位,ADSL端口复位,ADSL端口速率同步,用户设备绑定,用户设备解绑,业务下发,IPTV业务更改,业务认证重置".split(",")
					},
					{
						label : "线路核查",
						methods : "在线更纤,在线更线,在线测速,故障定位,带业务测试,视频输出制式查询".split(",")
					},
					{
						label : "终端检查",
						methods : "终端密码查询,终端绑定,终端解绑,业务下发,机顶盒密码重置,终端重启".split(",")
					}
				]
				Sider(list,function(method){	
					if(method === "一键检测")return this.jumpTo("!/yijianjiance")
					alert(method)
				}.bind(this))
			},
			jumpTo : function(url){	
				location.hash=url
			},
			baozhong : function(){
				this.pending = true
				setTimeout(function(){	
					this.step = 3
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					this.pending = false
					this.showFilter = false
				}.bind(this),1000)
			},
			chufa : function(){
				this.pending = true
				setTimeout(function(){	
					this.step = 4
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					this.pending = false
					this.showFilter = false
				}.bind(this),1000)
			},
			jungong : function(){
				this.pending = true
				setTimeout(function(){	
					this.step = 5
					this.pending = false
					location.hash="!/installDetail3"
				}.bind(this),1000)
			},
			next : function(){	
				location.hash="!/installDetail"
			}
		},
		components :　{	
			detailmenu : require("./DetailMenu"),
			detailtab : require("./DetailTab")
		}
	})
})