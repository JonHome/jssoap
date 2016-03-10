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
				}
				ul.grids-icon li.g1{	
					background:#fff url(resource/images/index-9.png) center 25px no-repeat;
				}
				ul.grids-icon li.g2{	
					background:#fff url(resource/images/index-10.png) center 25px no-repeat;
				}
				ul.grids-icon li.g3{	
					background:#fff url(resource/images/index-11.png) center 25px no-repeat;
				}
				ul.grids-icon li.g4{	
					background:#fff url(resource/images/index-12.png) center 25px no-repeat;
				}
				ul.grids-icon li.g5{	
					background:#fff url(resource/images/index-13.png) center 25px no-repeat;
				}
				ul.grids-icon li.g6{	
					background:#fff url(resource/images/index-14.png) center 25px no-repeat;
				}
				ul.grids-icon li.g7{	
					background:#fff url(resource/images/index-15.png) center 25px no-repeat;
				}
				ul.grids-icon li.g8{	
					background:#fff url(resource/images/index-2.png) center 25px no-repeat;
				}
				ul.grids-icon li.g9{	
					background:#fff url(resource/images/index-16.png) center 25px no-repeat;
				}
				ul.grids-icon li.g10{	
					background:#fff url(resource/images/index-17.png) center 25px no-repeat;
				}
				ul.grids-icon li.g11{	
					background:#fff url(resource/images/index-18.png) center 25px no-repeat;
				}
				ul.grids-icon li.g12{	
					background:#fff url(resource/images/index-19.png) center 25px no-repeat;
				}
				ul.grids-icon li.g13{	
					background:#fff url(resource/images/index-20.png) center 25px no-repeat;
				}
				ul.grids-icon li.g14{	
					background:#fff url(resource/images/index-21.png) center 25px no-repeat;
				}
				ul.grids-icon li.g15{	
					background:#fff url(resource/images/index-22.png) center 25px no-repeat;
				}
				ul.grids-icon li.g16{	
					background:#fff url(resource/images/index-23.png) center 25px no-repeat;
				}
				ul.grids-icon li.g17{	
					background:#fff url(resource/images/index-24.png) center 25px no-repeat;
				}
				ul.grids-icon li.g18{	
					background:#fff url(resource/images/index-25.png) center 25px no-repeat;
				}
				ul.grids-icon li.g19{	
					background:#fff url(resource/images/index-26.png) center 25px no-repeat;
				}
				ul.grids-icon li.g20{	
					background:#fff url(resource/images/index-27.png) center 25px no-repeat;
				}
				ul.grids-icon li.g21{	
					background:#fff url(resource/images/index-28.png) center 25px no-repeat;
				}
				</style>
				<ul class="grids-icon row">
					<li class="g1">用户信息查询</li>
					<li class="g2">用户错误信息</li>
					<li class="g3">宽带固话信息</li>
					<li class="g4">用户查询</li>
				</ul>
				<ul class="grids-icon row">
					<li class="g5">宽带上网记录</li>
					<li class="g6">宽带账号所属</li>
					<li class="g7">体验账号请求</li>
					<li class="g8">故障定位</li>
				</ul>
				<ul class="grids-icon row">
					<li class="g9">在线测速</li>
					<li class="g10">宽带密码复位</li>
					<li class="g11">重新捆绑帐号</li>
					<li class="g12">端口复位</li>
				</ul>
				<ul class="grids-icon row">
					<li class="g13">端口速率同步</li>
					<li class="g14">VLAN43绑定</li>
					<li class="g15">宽带速率同步</li>
					<li class="g16">接入账号复位</li>
				</ul>
				<ul class="grids-icon row">
					<li class="g17">终端版本查询</li>
					<li class="g18">终端超级密码</li>
					<li class="g19">绑定设备信息</li>
					<li class="g20">用户配置情况</li>
				</ul>
				<ul class="grids-icon row">
					<li class="g21">业务下发</li>
					<li class="g6">网元操作</li>
					<li class="g1">ITV综合网管</li>
					<li class="g2">知识库</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		events : {
		},
		methods : {
			yijianjiance : function(){	
				location.hash="!/yijianjiance"
			},
			back : function(){	
				history.go(-1)
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "实用工具",
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