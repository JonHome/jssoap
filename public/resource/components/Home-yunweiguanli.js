define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
				header.bar{background:#3C87D1}
				.content > .table-view-detail:first-child,
				.table-view.table-view-detail{	
					border-top: 1px solid #dddddd;
					border-bottom: 1px solid #dddddd;
					margin:10px 0;
				}
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
					.t-table{width:100%;background:#fff;}
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
				<img src="resource/images/index41.png"  style="width:100%" />
				<div class="card" style="margin:10px 0;border-left:0;border-right:0;border-radius:0">
					<table class="t-table">
						<thead>
							<tr>
								<th>班组指标</th>
								<th>装机单</th>
								<th>故障单</th>
							</tr>
						</thead>
						<tbody>
							<tr class="positive">
								<th>昨天安装量</th>
								<td>29</td>
								<td>17</td>
							</tr>
							<tr class="positive">
								<th>当月安装量</th>
								<td>640</td>
								<td>124</td>
							</tr>
							<tr class="positive">
								<th>当月催装率</th>
								<td>15.4%</td>
								<td>37.3%</td>
							</tr>
							<tr class="positive">
								<th>工单及时率</th>
								<td>86.3%</td>
								<td>76.3%</td>
							</tr>
						</tbody>
					</table>
				</div>
				<ul class="table-view table-view-detail ">
					<li class="table-view-cell">
						<dl>
							<dt>当月应得工资</dt>
							<dd>3281元</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>当月应得工资</dt>
							<dd>112元</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>上月总收入</dt>
							<dd>4825元</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>班组内排名</dt>
							<dd>3</dd>
						</dl>
					</li>
				</ul>
				<button class="btn btn-block btn-link" @click="detail">班组装机详情</button>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		events : {
		},
		methods : {
            detail : function(){
                location.hash="!/home-yunweiguanli-detail"
            },
			back : function(){	
				history.go(-1)
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "运维管理",
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