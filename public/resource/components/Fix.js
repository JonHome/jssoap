define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
						.filterBox .filter{	
							height:auto;
						}
						.filterBox .filter ul li{
							width:25%;
						}
				</style>
				<div class="filterBox" v-if="showFilter">
					<div class="filter">
						<table>
							<tbody>
								<tr>
									<td>
										<ul>
											<li><span @click="filterChgOption($event)">预警</span></li>
											<li><span @click="filterChgOption($event)">催装</span></li>
											<li><span @click="filterChgOption($event)">超时</span></li>
											<li><span @click="filterChgOption($event)">新请求</span></li>
										</ul>
										<ul>
											<li><span @click="filterChgOption($event)">新解挂</span></li>
											<li><span @click="filterChgOption($event)">新反馈</span></li>
											<li></li>
											<li></li>
										</ul>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<div style="padding:10px">
											<button class="btn btn-primary btn-block"
												 @click="chgFilter(false)"
											>确定</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="back-drop active" @click="chgFilter(false)"></div>
				</div>
				<div style="padding:10px" v-if="pending"><div style="margin:0 auto;width:21px"><i class="fa fa-spinner fa-spin" style="margin:0 auto"></i></div></div>
				<ul class="table-view table-view-custom">
					<li style="position:relative" class="table-view-cell media" v-for="row in list" @click="detail">
						<p style="position:absolute;right:10px;top:5px;">
							<span class="badge b1" v-if="$index!==0">超时</span>
							<span class="badge b2">催单</span>
							<span class="badge b3">随销</span>
							<span class="badge b3" v-if="$index===0">4K电视</span>
						</p>
						<img class="media-object pull-left" :src="'resource/images/'+row.icon+'.png'" style="width:42px">
						<div class="cell-body">
							{{row.name}}
							<p>
								<a :href="'tel:13265989234'">
									<i class="fa fa-phone"></i> {{row.tel}}
								</a>
							</p>
							<p>
								{{row.address}}
							</p>
							<p class="timedate">
								<span>预约</span>
								{{row.begin}}
								<span style="margin-left:5px">截至</span>
								{{row.end}}
							</p>
						</div>
					</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
				showFilter : false,
				filterType : 1,
				filterOption : 1,
				pending : false,
				begin : 0,
				count : 0,
				pageSize : 5,
				statu : "init",
				feaching : "init",
				list : [
					{icon:"install1",name:"张福周",tel:"13302866030",address:"南京市浦口区百润路7号2号天润路十街区56栋105室 （perfect造型）",status:"催,超,挂",begin:"1月23日 11:00 - 16:00",end:"1月23日 17:00"},
					{icon:"install2",name:"郑小燕",tel:"13360611813",address:"南京市浦口区天华南路20号天润路十街区34栋2单元1003室",status:"催,超,挂",begin:"1月23日 11:00 - 16:00",end:"1月23日 17:00"},
					{icon:"install3",name:"李彬",tel:"07564667574",address:"南京市浦口区沿江街道南浦路301号旭日上城一期小区36棟4单元1808室",status:"催,超,挂",begin:"1月23日 11:00 - 16:00",end:"1月23日 17:00"},
					{icon:"install4",name:"张文晖",tel:"13265989234",address:"南京市浦口区天华南路20号天润路十街区34栋2单元1003室",status:"催,超,挂",begin:"1月23日 11:00 - 16:00",end:"1月23日 17:00"}
				]
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "修障工单",
				label : "修障",
				leftbar : [
					{
						"icon" : "fa fa-filter",
						"method" : function(){
							this.chgFilter(true)
						}.bind(this)
					}
				],
				toolbar : [
					{
						"icon" : "fa fa-sort",
						"method" : function(){
							alert("排序")
						}.bind(this)
					},
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
			filterChgType : function(i){
				this.filterType = i
			},
			filterChgOption : function(event){
				var el = $(event.srcElement)
				el.toggleClass("active")
			},
			filterChgOptionSingle :function(i){
				this.filterOption = i
			},
			chgFilter : function(state){
				this.showFilter = state
			},
			renew : function(){	
				this.pending = true
				setTimeout(function(){	
					this.pending = false
				}.bind(this),500)
			},
			detail : function(){	
				location.hash="!/fixDetail0"
			}
		}
	})
})