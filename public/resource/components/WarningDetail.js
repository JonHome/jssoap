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
					type="false"
					:toggle="chgFilter"
					:show.sync="showFilter" v-if="showFilter">
					<button class="btn btn-primary btn-block" @click="next">竣工</button>
				</detailmenu>
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
				label : "预警",
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
			chgFilter : function(state){
				this.showFilter = state
			},
			back : function(){	
				location.hash="!/warning"
			},
			next : function(){
				location.hash="!/warningDetail3"
			}
		},
		components :　{
			detailmenu : require("./DetailMenu"),
			detailtab : require("./DetailTab")
		}
	})
})