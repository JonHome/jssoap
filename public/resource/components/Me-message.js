define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<ul class="table-view">
					<li class="table-view-cell">
						<a class="navigate-right" @click="detail">
							<span class="badge">12:13</span>
							[群障] 光明小区光交故障
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right" @click="detail">
							<span class="badge">12:13</span>
							[公告] E8-C施工注意事项
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right" @click="detail">
							<span class="badge">22:14</span>
							[公告] 语音下午陆续出现问题
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right" @click="detail">
							<span class="badge">12:13</span>
							[装维群] 谁知道如何处理691故障？
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right" @click="detail">
							<span class="badge">17:13</span>
							[装维群] 我们有张网络层障碍单
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right" @click="detail">
							<span class="badge">19:13</span>
							[装维群] 20160202116647，资源登陆
						</a>
					</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "我的消息",
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
			detail : function(){
				location.hash="!/me-message-detail"
			},
			back : function(){
				history.go(-1)
			}
		}
	})
})