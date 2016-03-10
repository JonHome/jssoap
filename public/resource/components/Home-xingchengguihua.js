define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<ul class="ttab" style="margin-bottom:10px">
					<li @click="chgTab(1)" :class="tab===1?'active':''"><span><i class="fa fa-clock-o"></i> 距离优先</span></li>
					<li @click="chgTab(2)" :class="tab===2?'active':''"><span><i class="fa fa-male"></i> 时间优先</span></li>
					<li @click="chgTab(3)" :class="tab===3?'active':''"><span><i class="fa fa-cloud"></i> 智能规划</span></li>
					<li class="empty"></li>
				</ul>
				<ul class="table-view" v-if="tab===1">
					<li class="table-view-cell">1.建邺区福园街129号南京万达中心E座</li>
					<li class="table-view-cell">2.建邺区露园街21号明园社区</li>
					<li class="table-view-cell">3.鼓楼区荷花里3号莫愁新寓</li>
				</ul>
				<ul class="table-view" v-if="tab===2">
					<li class="table-view-cell">1.鼓楼区荷花里3号莫愁新寓</li>
					<li class="table-view-cell">2.建邺区福园街129号南京万达中心E座</li>
					<li class="table-view-cell">3.建邺区露园街21号明园社区</li>
				</ul>
				<ul class="table-view" v-if="tab===3">
					<li class="table-view-cell">1.建邺区露园街21号明园社区</li>
					<li class="table-view-cell">2.建邺区福园街129号南京万达中心E座</li>
					<li class="table-view-cell">3.鼓楼区荷花里3号莫愁新寓</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
				tab :1 
			}
		},
		methods : {
			chgTab : function(i){
				this.tab = i
			},
			back : function(){	
				history.go(-1)
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "行程规划",
				label : "首页",
				leftbar : [
					{
						"icon" : "icon icon-left-nav",
						"method" : function(){
							this.back()
						}.bind(this)
					}
				],
				toolbar : []
			})
		}
	})
})