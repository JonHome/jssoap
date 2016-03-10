define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<div style="padding:10px" v-if="pending"><div style="margin:0 auto;width:21px"><i class="fa fa-spinner fa-spin" style="margin:0 auto"></i></div></div>
				<ul class="table-view table-view-custom">
					<li class="table-view-cell media" v-for="row in list" @click="detail">
						<img class="media-object pull-left" :src="'resource/images/'+row.icon+'.png'" style="width:42px">
						<div class="cell-body">
							<span class="price">{{row.price}}元</span>
							{{row.name}}
							<p>
								<a :href="'tel:13265989234'">
									{{row.tel}}
								</a>
							</p>
							<p>
								{{row.address}}
							</p>
						</div>
					</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
				pending : false,
				list : [
					{icon:"business1",name:"张福周",price:"32.00",tel:"13302866030",address:"南京市浦口区百润路7号2号天润路十街区56栋105室"},
					{icon:"business2",name:"郑小燕",price:"10.00",tel:"13360611813",address:"南京市浦口区天华南路20号天润路十街区34栋2单元1003室"},
					{icon:"business3",name:"李彬",price:"2.00",tel:"07564667574",address:"南京市浦口区天华南路20号天润路十街区34栋2单元1003室"},
					{icon:"business4",name:"张文晖",price:"16.00",tel:"13265989234",address:"南京市浦口区沿江街道南浦路301号旭日上城一期小区36棟4单元1808室"},
					{icon:"business1",name:"张福周",price:"32.00",tel:"13302866030",address:"南京市浦口区百润路7号2号天润路十街区56栋105室"},
					{icon:"business2",name:"郑小燕",price:"10.00",tel:"13360611813",address:"南京市浦口区天华南路20号天润路十街区34栋2单元1003室"},
					{icon:"business3",name:"李彬",price:"2.00",tel:"07564667574",address:"南京市浦口区天华南路20号天润路十街区34栋2单元1003室"},
					{icon:"business4",name:"张文晖",price:"16.00",tel:"13265989234",address:"南京市浦口区沿江街道南浦路301号旭日上城一期小区36棟4单元1808室"}
				]
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "营销工单",
				label : "营销",
				leftbar : [
					{
						"icon" : "fa fa-filter",
						"method" : function(){
							alert("筛选")
						}.bind(this)
					}
				],
				toolbar : [
					{
						"icon" : "fa fa-search",
						"method" : function(){
							alert("搜索")
						}.bind(this)
					}
				]
			})
		},
		events : {
		},
		methods : {
			renew : function(){	
				this.pending = true
				setTimeout(function(){	
					this.pending = false
				}.bind(this),500)
			},
			detail : function(){	
				location.hash="!/businessDetail"
			}
		}
	})
})