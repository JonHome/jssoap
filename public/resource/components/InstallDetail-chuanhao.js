define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div  class="content" style="margin-bottom:70px;">
				<div class="card">
					<ul class="table-view">
						<li class="table-view-cell table-view-divider">将摄像头对准设备条码</li>
						<li class="table-view-cell">
							<img src="resource/images/+.png" style="width:80px;margin-bottom:10px;" @click="takephoto" />
						</li>
					</ul>
				</div>
				<div style="padding:10px 10px 0;background:#fff;position:fixed;bottom:0;width:100%;">
					<button class="btn btn-positive btn-block" v-if="!pending" @click="next">保存串号信息</button>
					<button disabled class="btn btn-positive btn-block" v-if="pending"><i class="fa fa-spinner fa-spin"></i></button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				pending : false
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "扫描串号",
				label : "装机",
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
				location.hash="!/installDetail3"
			},
			next : function(){	
				this.pending = true
				setTimeout(function(){	
					this.pending = false
					notify.success({
						duration : 1000,
						message : "已保存串号信息！"
					})
					location.hash="!/installDetail4"
				}.bind(this),1000)
			},
			takephoto : function(){	
				alert("跳转串号扫描界面")
			}
		}
	})
})