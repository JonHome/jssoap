define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
					.leg-body{
						margin-right: 20px;
					}
					.button{
						width: 65px;
					}
					.p{
						margin-left: 10px;
					}
					.header{
						margin-top: 60px;
					}
					.f{
						positon:relative;
						margin-right:-70px;
						margin-top:-51px
					}
				</style>
				<nav class="bar">
					<span class="icon icon-search pull-right"></span>
					<div style="margin-right:30px;text-align:center">
						<input type="search" style="text-align:center" placeholder="查询"/>
					</div>
				</nav>
				<div class="header">
				<p class="p">光路信息</p>
					<form>
						<div class="card" style="margin:5px 0">
							<ul class="table-view">
								<li class="table-view-cell">
				                    <div class="leg-body">
					                    DP-POS-503232
					                    <p>盛泽徐家兵118号HWORD-01</p>
					                    <p>端口：90045</p>
					                    <i class="fa fa-bars fa-2x f pull-right"></i>
				                    </div>
				                </li>
							</ul>
						</div>
						<div class="card" style="margin:5px 0">
							<ul class="table-view">
								<li class="table-view-cell">
				                    <div class="leg-body">
					                    512WJSZDGJ/GJ047
					                    <p>盛泽徐家兵118号光交</p>
					                    <p>端口：43[4|7]</p>
					                    <i class="fa fa-bars fa-2x f pull-right"></i>
				                    </div>
				                </li>
							</ul>
						</div>
						<div class="card" style="margin:5px 0">
							<ul class="table-view">
								<li class="table-view-cell">
				                    <div class="leg-body">
					                    512WJSZDGJ/GF892
					                    <p>盛泽东源村10组（光纤分箱）</p>
					                    <p>端口：7[1|7]</p>
					                    <i class="fa fa-bars fa-2x f pull-right"></i>
				                    </div>
				                </li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "在线更纤",
				label : "首页",
				showFooter : false,
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
		},
		methods : {
			back : function(){
				history.go(-1)
			}
		}
	})
})