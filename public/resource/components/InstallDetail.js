define(function(require){
	var Vue = require("Vue")
	window.utils = require("utils")
	//utils.alert("123")
	var template = require("utils").template
	var Sider = require("Sider")
	return Vue.extend({	
		template : template(function(){/*
			<div class="content detail" style="background:#fff;margin-bottom:70px;">
				<detailmenu 
					:toggle="chgFilter"
					:show.sync="showFilter" v-if="showFilter">
					<button class="btn btn-primary btn-block" @click="next">跳纤</button>
				</detailmenu>
				<div style="padding:10px" class="step">
					<ul>
						<li class="active">接单<span></span></li>
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
			chgFilter : function(state){
				this.showFilter = state
			},
			jumpTo : function(url){	
				location.hash=url
			},
			back : function(){	
				location.hash="!/install"
			},
			next : function(){	
				location.hash="!/installDetail1"
			}
		},
		components :　{	
			detailmenu : require("./DetailMenu"),
			detailtab : require("./DetailTab")
		}
	})
})