define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content" style="padding:10px 0;">
				<ul class="grids r1" style="margin-top:10px">
					<li class="grids-header ">
						<h3>使用说明</h3>
					</li>
					<li class="grids-body">
						打开手机的设置，在里面就会看到应用选项。
						->
						点击应用，会看到自启动选项。
						->
						点击进入自启动选项，会看到所有手机里装的软件在需要开启自启动的软件前面打勾。
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
				title : "帮助",
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