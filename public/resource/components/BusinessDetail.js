define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content" style="background:#fff">
				<ul class="table-view table-view-detail ">
					<li class="table-view-cell" v-for="row in list">
						<dl>
							<dt>{{row.key}}</dt>
							<dd :class="row.style">{{row.value}}</dd>
						</dl>
					</li>
				</ul>
				<div style="padding:0 10px 10px 10px">
					<button class="btn btn-primary btn-block" @click="next">催缴费</button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				list : [
					{key:"客户",value:"张福周"},
					{key:"电话",value:"18112818309"},
					{key:"地址",value:"南京市浦口区沿江街道南浦路301号旭日上城一期小区36棟4单元1808室"},
					{key:"欠费金额",value:"2.00元",style:"important"},
					{key:"滞纳金",value:"2.00元",style:"important"},
					{key:"套餐详情",value:"【公用】天翼e家/e9全家通信升级149/乐享129/iTv-JS2013"},
					{key:"接入号",value:"12209697"},
					{key:"宽带帐号",value:"sza812946"}
				]
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "营销工单详情",
				label : "营销",
				toolbar : [],
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
				history.go(-1)
			},
			next : function(){	
				location.hash="!/businessDetail1"
			}
		}
	})
})