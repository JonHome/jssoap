define(function(require){
	var Vue = require("Vue")
	window.utils = require("utils")
	//utils.alert("123")
	var template = require("utils").template
	var Sider = require("Sider")
	return Vue.extend({	
		template : template(function(){/*
			<div class="content detail" style="background:#fff;">
				<div class="filterBox" v-if="showFilter">
					<div class="filter">
						<div style="padding:10px 10px 0;">
							<button class="btn btn-primary btn-block" @click="next">接单</button>
						</div>
					</div>
					<div class="back-drop active" @click="chgFilter(false)"></div>
				</div>
				<div style="padding:10px" class="step">
					<ul>
						<li>接单<span></span></li>
						<li>跳纤<span></span><div class="line"></div></li>
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
				showFilter : false
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "工单详情",
				label : "装机",
				showFooter : false,
				toolbar : [
					{	
						"icon" : "fa fa-bars",
						"method" : function(){
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
			dianhuayuyue : function(event){	
				var btn = event.srcElement
				var text = btn.innerHTML
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				alert("跳出拨打电话界面")
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					btn.innerHTML = text
					btn.disabled = false
				}.bind(this),1000)
			},
			duanxinyuyue : function(event){	
				var btn = event.srcElement
				var text = btn.innerHTML
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				alert("跳出短信编辑界面")
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					btn.innerHTML = text
					btn.disabled = false
				}.bind(this),1000)
			},
			peizhijiancha : function(event){	
				var btn = event.srcElement
				var text = btn.innerHTML
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				setTimeout(function(){	
					location.hash="!/installDetail-peizhijiancha"
				}.bind(this),1000)
			},
			next : function(){	
				var btn = event.srcElement
				var text = btn.innerHTML
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "已接单！"
					})
					location.hash="!/installDetail"
				}.bind(this),1000)
			}
		},
		components :　{	
			detailtab : require("./DetailTab")
		}
	})
})