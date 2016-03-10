define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content" style="padding:10px 0;">
				<style>
					.text-area{
						resize: none;
						height: 35px;
						padding: 6px;
						margin-top: 10px;
		    			width:200px;
		    			border: 0;
					}
					.table-view-ul .table-view-cell{
						padding: 0;
						border:none;
						height: 60px;
					}
					.table-view-ul .table-view-cell div{
						display: table;
						width: 100%;
					}
					.table-view-ul .table-view-cell span{
						display: table-cell;
		    			transform:translate(20px,0);
					}
					a{
						float:right;
						margin: 0 10px 10px 5px;
					}
					.image{ 
						width: 100px; 
						height: 100px; 
						border-radius: 25px;
						border: 2px solid #DDDDDD;
						display: block;
						margin: 15px auto 20px auto;
					}
					</style>
				</style>
					<div class="div">
						<img class="image" src="resource/images/icons/知识库.png" />
					</div>
				<form class="input-group">
					<div class="input-row">
				    	<label>账 号 ：</label>
				    	<input type="text" v-model="username" placeholder="输入登录账号">
				  	</div>
				  	<div class="input-row">
				   	 	<label>密 码 ：</label>
				   	 	<input type="password" v-model="password" placeholder="输入登录密码">
				  	</div>
				</form>
				<p><a>忘记密码?</a><a>注册</a></p>
				<div style="padding:10px;">
					<button class="btn btn-primary btn-block" @click="next($event)"> 登录 </button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				user:"test",
				pasd:"test"
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "登录",
				label : "",
				showFooter : false,
			})
		},
		methods : {
			back : function(){
				history.go(-1)
			},
			next : function(event){
				var username = this.username
				var password = this.password

				if (username !== this.user || password !== this.pasd) {
					return notify.error({
						duration : 1000,
						message : "输入错误！"
					})
				}

				var btn = event.srcElement
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "登录成功！"
					})
					location.hash="!/home"
				}.bind(this),1000)
			}
		}
	})
})