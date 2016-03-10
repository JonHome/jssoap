define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content " style="padding:10px 0 0 0;">
				<style>
					.leg-div span{
			    		margin:10px 0;
					}
					.leg-body{
						margin-top: 5px;
						margin-left: 70px;
						margin-right: 20px;
					}
					.button{
						width: 65px;
					}
					.p{
						margin-left: 5px;
					}
				</style>
				<p class="p">请选择要上传的文件</p>
				<form>
					<div class="card" style="margin:10px 0">
						<ul class="table-view">
							<li class="table-view-cell">
								<div class="leg-div pull-left">
				                    <span class="fa fa-file-text-o fa-3x"></span>
			                    </div>
			                    <div class="leg-body">
				                    2015-02-26.log
				                    <p>65.05K</p>
			                    </div>
			                    <button class="btn btn-primary button" @click="next">上 传</button>
			                </li>
						</ul>
					</div>
					<div class="card" style="margin:10px 0">
						<ul class="table-view">
							<li class="table-view-cell">
								<div class="leg-div pull-left">
				                    <span class="fa fa-file-text-o fa-3x"></span>
			                    </div>
			                    <div class="leg-body">
				                    2015-02-27.log
				                    <p>30.12K</p>
			                    </div>
			                    <button class="btn btn-primary button" @click="next">上 传</button>
			                </li>
						</ul>
					</div>
				</form>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "日志上传",
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
			back : function(){
				history.go(-1)
			},
			next : function(){
				var btn = event.srcElement
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "上传成功！"
					})
					btn.style.display = "none"
					location.hash="!/me-uplog"
				}.bind(this),1000)
			}
		}
	})
})