define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
				ul.grids-icon{	
					padding:0;
					margin:0;
					display:table;
					border-collapse:collapse;
				}
				ul.grids-icon.row li{	
					border-bottom:0;
				}
				ul.grids-icon li{	
					background:#fff;
					width:20%;
					border:#ECECED 1px solid;
					padding:55px 0 15px 0;
					background:#fff url(resource/images/index-1.png) center 25px no-repeat;
				}
				.div{
					padding: 15px 0 0 5px;
					margin-left: 5px;
				}
				p{
					float:right;
					padding: 0 5px;
				}
				</style>
				<div class="fa fa-bars div">
					<p>问题分类</p>
				</div>
				<ul class="grids-icon row">
					<li style="background-image:url(resource/images/icons/一键检测.png)" @click="text">一键检测</li>
					<li style="background-image:url(resource/images/icons/故障定位.png)">故障定位</li>
					<li style="background-image:url(resource/images/icons/带业务测试.png)">带业务测试</li>
					<li style="background-image:url(resource/images/icons/光衰检测.png)">光衰检测</li>
				</ul>
				<ul class="grids-icon row">
					<li style="background-image:url(resource/images/icons/摇一摇接单.png)">抢单</li>
					<li style="background-image:url(resource/images/icons/iTV.png)">ITV用户查询</li>
					<li style="background-image:url(resource/images/icons/ADSL端口复位.png)">端口复位</li>
					<li style="background-image:url(resource/images/icons/知识库.png)">知识库</li>
				</ul>
				<ul class="grids-icon">
					<li style="background-image:url(resource/images/icons/业务下发.png)">业务下发</li>
					<li style="background-image:url(resource/images/icons/宽带在线剔除.png)">宽带在线剔除</li>
					<li style="background-image:url(resource/images/icons/用户设备关联.png)">用户设备关联</li>
					<li style="background-image:url()"></li>
				</ul>
			</div>
			<div style="padding:10px;">
				<button class="btn btn-negative btn-block" @click="back"> 退出 </button>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "帮助",
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
		},
		methods : {
			text : function(){
				location.hash="!/me-help-text"
			},
			back : function(){
				history.go(-1)
			}
		}
	})
})