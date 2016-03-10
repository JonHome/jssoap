define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content" style="margin-bottom:0">
				<style>
					.jindu{	
						background:#71B7FF;
						transition:height .15s linear;
						text-align:center;
						color:#fff;
					}
					.jindu .jindutiao{	
						border-radius:100%;
						width:200px;
						height:200px;
						border:#B8DCFF 3px solid;
						line-height:200px;
						text-align:center;
						color:#fff;
						position:relative;
						margin : 0 auto;
						top:50px;
						font-size:30px;
					}
					.jindu .jindutiao1{	
						text-align:center;
						font-size:30px;
						color:#fff;
					}
					.jindu .jindutiao1 span,
					.jindu .jindutiao span{	
						font-size:60px;
					}
					.jindu .btn{	
						position:relative;
						display:block;
						margin : 0 auto;
						top:80px;
						width:180px;
						height:44px;
						border-radius:22px;
						border:#B8DCFF 1px solid;
						background : #71B7FF;
						color:#fff;
						font-size:18px;
					}
					.context{
						padding :10px 40px;
					}
					.context ul{padding:0}
					.context li{
						list-style-type:none;
						padding-bottom:10px;	
					}
					.context li.ttitle{
						font-size:18px;
						margin-bottom:10px;
					}
					.context li.ttitle span{
						float:right;
						position:relative;
						top:0px;
					}
					.rresult li.ttitle{border-bottom:#ccc 1px solid}
					.rresult li.ttitle span{font-size:16px;}
				</style>
				<div :style="{height:iheight+'px'}" style="background:#fff;overflow:hidden;transition:all .15s linear;">
					<div class="jindu" :style="{height:height+'px'}">
						<div :style="{height:mheight+'px'}" style="transition:all .15s linear;"></div>
						<template v-if="progress===0">
							<div class="jindutiao"><span style="font-size:40px;">已修复</span></div>
							<button class="btn" @click="back">重新检测</button>
						</template>
					</div>
				<div>
			</div>
		*/}),
		data : function(){
			return {
				height : 0,
				mheight : 100,
				iheight : 0,
				interval : null,
				progress : 0
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
			this.height = $(window).height()-44
			this.iheight = $(window).height()-44
			this.$dispatch("init",{
				title : "一键检测",
				label : "首页",
				showFooter : false,
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