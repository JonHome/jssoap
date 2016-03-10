define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div  class="content">
				<style>
					.table-view-todoList li{
						padding-right:40px;
					}
					.table-view-todoList li a:not(.btn){	
						position: relative;
						display: block;
						padding: inherit;
						margin: -11px -45px -11px -15px;
						overflow: hidden;
						color: inherit;
					}
					.table-view-todoList li a:after{	
						position: absolute;
						top: 50%;
						right:15px;
						display: inline-block;
						font-family: Ratchicons;
						font-size: inherit;
						line-height: 1;
						color: #bbb;
						text-decoration: none;
						-webkit-transform: translateY(-50%);
						-ms-transform: translateY(-50%);
						transform: translateY(-50%);
						-webkit-font-smoothing: antialiased;
						content: '\e826'
					}
					.table-view-todoList li.finish dd{	
						background:url(resource/images/radio1.png) center right no-repeat;
					}
					.table-view-todoList li dl{display:table;width:100%;margin:0}
					.table-view-todoList li dl *{display:table-cell;}
					.table-view-todoList li dl dt{width:45%;}
					.table-view-todoList li dl dd{width:55%;text-align:right;color:#999;}
					.t-table{width:100%;}
					.t-table td{text-align:center}
					.t-table td,.t-table th{	
						padding:5px;
						font-weight:normal;
					}
					.t-table tbody tr{border-top:#ccc 1px solid;}
					.t-table thead tr > *{background:#fafafa;color:#999;}
					.t-table tr.positive > td{color:#5cb85c;}
					.t-table tr.negative > td{color:#d9534f;}
				</style>
				<div class="card">
					<table class="t-table">
						<thead>
							<tr>
								<th></th>
								<th>架</th>
								<th>框</th>
								<th>槽</th>
								<th>端口</th>
								<th>IP</th>
							</tr>
						</thead>
						<tbody>
							<tr class="positive">
								<th>BSS</th>
								<td>00</td>
								<td>12</td>
								<td>03</td>
								<td>55</td>
								<td></td>
							</tr>
							<tr class="negative">
								<th>IPOSS</th>
								<td>00</td>
								<td>00</td>
								<td>12</td>
								<td>03</td>
								<td>222.190.14.62</td>
							</tr>
						</tbody>
					</table>
				</div>
				<ul class="table-view table-view-detail ">
					<li class="table-view-cell" v-for="row in list">
						<dl>
							<dt>{{row.key}}</dt>
							<dd>{{row.value}}</dd>
						</dl>
					</li>
				</ul>
				<div style="padding:10px 10px 0;">
					<button class="btn btn-block" v-if="finish" @click="next">转派</button>
					<button class="btn btn-negative btn-block" v-if="finish" @click="next">挂起</button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				finish : true,
				list : [
					{key:"系统",value:"LOID"},
					{key:"ITMS操作结果",value:"此用户未绑定设备"},
					{key:"PON测试结果",value:""},
					{key:"宽带线路信息",value:"执行成功"},
					{key:"逻辑ID",value:"没有配置"},
					{key:"宽带VLAN",value:"没有配置"},
					{key:"ITV VLAN",value:"没有配置"},
					{key:"ITMS VLAN",value:"没有配置"}
				]
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "配置检查结果",
				label : "预警",
				showFooter : false,
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
				location.hash="!/warningDetail0"
			},
			next : function(){	
				location.hash="!/warning"
			}
		}
	})
})