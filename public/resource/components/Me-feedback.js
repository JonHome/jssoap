define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content " style="padding:10px;">
				<p>欢迎提出宝贵意见</p>
				<form>
					<textarea rows="5" placeholder="输入您要反馈的内容"></textarea>
					<button class="btn btn-positive btn-block">反馈</button>
				</form>
				<p>或直接拨打值班电话</p>
				<button class="btn btn-block"><i class="fa fa-phone"></i> 拨打电话</button>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "意见反馈",
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
			}
		}
	})
})