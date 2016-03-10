define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content" style="margin-bottom:70px;">
				<ul class="table-view table-view-detail " style="background:#fff;">
					<li class="table-view-cell">
						<dl>
							<dt>当前定位</dt>
							<dd>南环东路9号2栋614室</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<div class="toggle pull-right" :class="sign?'active':''" @click="active">
							<div class="toggle-handle"></div>
						</div>
						<dl>
							<dt>同时进行报钟</dt>
							<dd></dd>
						</dl>
					</li>
				</ul>
				<div class="card">
					<ul class="table-view">
						<li class="table-view-cell table-view-divider">拍照</li>
						<li class="table-view-cell">
							<img src="resource/images/+.png" style="width:80px;margin-bottom:10px;" @click="takephoto" />
						</li>
					</ul>
				</div>
			</div>
				<div style="padding:10px 10px 0;background:#fff;position:fixed;bottom:0;width:100%;">
					<button class="btn btn-primary btn-block"" v-if="!pending" @click="next">跳纤</button>
					<button disabled class="btn btn-primary btn-block" v-if="pending"><i class="fa fa-spinner fa-spin"></i></button>
				</div>
		*/}),
		data : function(){
			return {
				pending : false,
				sign : true
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "工单详情 - 跳纤",
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
				history.go(-1)
			},
			active : function(){
				this.sign = !this.sign
			},
			takephoto : function(){	
				alert("跳转到拍照界面")
			},
			next : function(){	
				this.pending = true
				setTimeout(function(){	
					this.pending = false
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					location.hash="!/installDetail2"
				}.bind(this),1000)
			}
		}
	})
})