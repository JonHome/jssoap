define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
				.table-view-my .media-object{
					position: absolute;
		    		top: 50%;
		    		transform: translateY(-50%);
				}
				.table-view-my .media-body{
					margin-left : 25px;
				}
				.li { 
					border-bottom:1px blue dashed; 
				}
				</style>
				<ul class="table-view table-view-my">
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-comment"></span>
							<div class="media-body" @click="message">
								我的消息
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-star"></span>
							<div class="media-body">
								我的积分
							</div>
						</a>
					</li>
				</ul>
				<ul class="table-view table-view-my">
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-key"></span>
							<div class="media-body" @click="password">
								更换密码
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-tasks"></span>
							<div class="media-body">
								调整框目顺序
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-users"></span>
							<div class="media-body">
								下载地址共享
							</div>
						</a>
					</li>
				</ul>
				<ul class="table-view table-view-my">
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-comments"></span>
							<div class="media-body" @click="feedback">
								意见反馈
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-info-circle"></span>
							<div class="media-body">
								版本信息
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-cloud-upload"></span>
							<div class="media-body" @click="uplog">
								日志上传
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-question"></span>
							<div class="media-body" @click="help">
								帮助
							</div>
						</a>
					</li>
					<li class="table-view-cell">
						<a class="navigate-right">
							<span class="media-object pull-left icon fa fa-sign-out"></span>
							<div class="media-body" @click="login">
								退出
							</div>
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
				title : "我",
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
			message : function(){	
				location.hash="!/me-message"
			},
			feedback : function(){	
				location.hash="!/me-feedback"
			},
			password : function(){	
				location.hash="!/me-password"
			},
			help : function(){	
				location.hash="!/me-help"
			},
			uplog : function(){	
				location.hash="!/me-uplog"
			},
			login : function(){	
				location.hash="!/login"
			},
			back : function(){
				history.go(-1)
			}
		}
	})
})