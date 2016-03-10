define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
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
					.t-table tbody th span{border:#999 1px solid;color:#999;padding:2px 5px;font-size:12px;border-radius:5px;}
					.t-table tbody th span.top1{border:0;color:#fff;background:#FE4123;}
					.t-table tbody th span.top2{border:0;color:#fff;background:#FE8916;}
					.t-table tbody th span.top3{border:0;color:#fff;background:#FEC72C;}
				</style>
				<div class="card" style="margin:10px 0;border-left:0;border-right:0;border-radius:0">
					<table class="t-table">
						<thead>
							<tr>
								<th>排名</th>
								<th>姓名</th>
								<th>昨日安装量</th>
								<th>当月安装量</th>
							</tr>
						</thead>
						<tbody>
							<tr class="positive">
								<th><span class="top1">1</span></th>
								<th>张萌萌</th>
								<td>15</td>
								<td>450</td>
							</tr>
							<tr class="positive">
								<th><span class="top2">2</span></th>
								<th>华英明</th>
								<td>14</td>
								<td>430</td>
							</tr>
							<tr class="positive">
								<th><span class="top3">3</span></th>
								<th>钟一凡</th>
								<td>13</td>
								<td>420</td>
							</tr>
							<tr class="positive">
								<th><span>4</span></th>
								<th>张东东</th>
								<td>12</td>
								<td>420</td>
							</tr>
							<tr class="positive">
								<th><span>5</span></th>
								<th>赵虎聪</th>
								<td>11</td>
								<td>418</td>
							</tr>
							<tr class="positive">
								<th><span>6</span></th>
								<th>孙晓庆</th>
								<td>8</td>
								<td>240</td>
							</tr>
							<tr class="positive">
								<th><span>7</span></th>
								<th>艾小西</th>
								<td>7</td>
								<td>210</td>
							</tr>
							<tr class="positive">
								<th><span>8</span></th>
								<th>郭明明</th>
								<td>6</td>
								<td>200</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		events : {
		},
		methods : {
			back : function(){	
				history.go(-1)
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "班组装机详情",
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