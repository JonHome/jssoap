define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
				header.bar{background:#3C87D1}
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
                ul.grids.r1 li.grids-header:after{
                    right: 15px;
                    content: '\e826';
                    position: absolute;
                    top: 50%;
                    display: inline-block;
                    color: #bbb;
                    font-family: Ratchicons;
                    font-size: inherit;
                    text-decoration: none;
                    line-height: 1;
                    -webkit-font-smoothing: antialiased;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    margin-top: -24px;
                }
				</style>
				<img src="resource/images/index41.png"  style="width:100%" @click="yunweiguanli" />
				<ul class="grids-icon row">
					<li style="background-image:url(resource/images/icons/一键检测.png)" @click="yijianjiance">一键检测</li>
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
					<li style="background-image:url(resource/images/icons/更多.png)" @click="more">更多</li>
				</ul>
				<ul class="grids r1" style="margin-top:10px">
                    <li class="grids-header" @click="xingchengguihua">
						<h3>行程规划</h3>
					</li>
					<li class="grids-body">
						福园路凤栖苑
						->
						露园
						->
						荷花里
					</li>
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
            yunweiguanli : function(){
                location.hash="!/home-yunweiguanli"
            },
            xingchengguihua : function(){
                location.hash="!/home-xingchengguihua"
            },
			yijianjiance : function(){	
				location.hash="!/yijianjiance"
			},
			cesu : function(){	
			//	location.hash="!/cesu"
			},
			more : function(){	
				location.hash="!/more"
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				//标题
				title : "营维通",
				//需要激活的label名称
				label : "首页",
				//左上菜单栏
				leftbar : [],
				//右上菜单栏
				toolbar : [
					{
						"icon" : "fa fa-user",
						"method" : function(){
							location.hash="!/me"
						}.bind(this)
					}
				]
			})
		}
	})
})