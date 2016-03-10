define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div  class="content" style="margin-bottom:70px;">
				<ul class="table-view table-view-detail ">
					<li class="table-view-cell" v-for="row in list">
						<dl>
							<dt>{{row.key}}</dt>
							<dd>{{row.value}}</dd>
						</dl>
					</li>
				</ul>
				<div style="padding:10px 10px 0;" v-if="cesuing===0">
					<button class="btn btn-block" @click="cesu">开始测速</button>
				</div>
				<div style="padding:10px 10px 0;" v-if="cesuing===1">
					{{sudu}} KB/S
					<div class="progress">
						<div class="progress-bar" :style="{width:jindu+'%'}"></div>
					</div>
				</div>
				<div v-if="cesuing===2">
					<div class="card">
						<ul class="table-view table-view-detail ">
							<li class="table-view-divider">
								带宽测试结果:偏慢
							</li>
							<li class="table-view-cell">
								<dl>
									<dt>本次测试带宽</dt>
									<dd>约3.14M</dd>
								</dl>
							</li>
							<li class="table-view-cell">
								<dl>
									<dt>平均值</dt>
									<dd>399KB/S</dd>
								</dl>
							</li>
							<li class="table-view-cell">
								<dl>
									<dt>峰值</dt>
									<dd>631KB/S</dd>
								</dl>
							</li>
						</ul>
					</div>
					<div style="padding:10px 10px 0;">
						<button class="btn btn-block" @click="cesu">重新测速</button>
					</div>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				list : [
					{key:"宽带账号",value:"0012455322"},
					{key:"归属地",value:"南京市"},
					{key:"签约带宽",value:"20M"}
				],
				cesuing : 0,
				jindu : 0,
				sudu : 310,
				pending : false
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "测速",
				label : "修障",
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
				history.go(-1)
			},
			cesu : function(){	
				this.cesuing = 1
				this.jindu = 0
				var interval = setInterval(function(){	
					if(this.jindu === 100){	
						clearInterval(interval)
						this.cesuing = 2
					}
					this.sudu = Math.floor(Math.random()*(600-300))+300;
					this.jindu = this.jindu+5
				}.bind(this),100)
			},
			takephoto : function(){	
				alert("跳转串号扫描界面")
			}
		}
	})
})