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
							<div class="jindutiao"><span style="font-size:40px;">未检测</span></div>
							<button class="btn" @click="check">一键检测</button>
						</template>
						<template v-if="progress>0 && progress<100">
							<div class="jindutiao"><span>{{progress}}</span> %</div>
							<button class="btn" @click="init" v-if="progress<100">取消</button>
						</template>
						<template v-if="progress===100">
							<div class="jindutiao1"><span>{{progress}}</span> %</div>
							<span>检测完成，发现1个问题</span>
						</template>
					</div>
					<div class="context" v-if="progress<100">
						<ul>
							<li class="ttitle">
								<span>{{progress}}%</span>
								正在对业务平台进行检查...
							</li>
							<li v-if="progress>80">检查RADIUS最近一周是否有错误提示</li>
							<li v-if="progress>60">宽带用户账号是否在线</li>
							<li v-if="progress>40">检查BSS用户状态是否异常</li>
							<li v-if="progress>20">检查RADIUS是否当天有错误提示</li>
						</ul>
					</div>
					<div class="context" v-if="progress===100" style="padding:10px;overflow: auto;" :style="{height:(iheight-150)+'px'}">
						<ul class="rresult">
							<li class="ttitle"><span style="margin-right:70px;">正常</span>检查BSS用户状态是否异常</li>
							<li class="ttitle"><span style="margin-right:70px;">正常</span>检查RADIUS用户状态是否异常</li>
							<li class="ttitle"><span style="margin-right:70px;">正常</span>终端绑定信息</li>
							<li class="ttitle"><span style="margin-right:78px;">无</span>检查RADIUS是否当天有错误提示</li>
							<li class="ttitle"><span style="margin-right:70px;">正常</span>接入设备（OLT）状态</li>
							<li class="ttitle"><span style="margin-right:70px;">正常</span>分光器到终端是否正常</li>
							<li class="ttitle"><span style="margin-right:70px;">正常</span>E8-C终端是否能交互</li>
							<li class="ttitle">
								<button class="btn btn-outlined btn-primary pull-right">修复</button>
								<span style="margin-right:5px;color:red"><strong>1个口DOWN</strong></span>ONU用户端口是否正常
							</li>
						</ul>
						<button class="btn btn-block" @click="init">重新检测</button>
						<button class="btn btn-positive btn-block" v-if="!pending" @click="xiufu">一键修复</button>
						<button class="btn btn-positive btn-block" v-if="pending" disabled><i class="fa fa-spinner fa-spin"></i></button>
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
				progress : 0,
				pending : false
			}
		},
		events : {
		},
		methods : {
			check : function(){
				this.height=350
				this.mheight=0
				this.interval = setInterval(function(){
					this.progress += 5
					if(this.progress === 100){
						this.height=150
						clearInterval(this.interval)
					}
				}.bind(this),300)
			},
			init : function(){
				if(this.interval)clearInterval(this.interval)
				this.height = $(window).height()-44
				this.mheight = 100
				this.progress = 0
			},
			xiufu : function(){	
				this.pending = true
				setTimeout(function(){	
					this.pending = false
					location.hash="!/yijianxiufu"
				}.bind(this),1000)
			},
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