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
		    			transform:translate(10px,0);
					}
				</style>
				<form class="input-group">
				  	<div class="input-row">
				    	<label>登录密码:</label>
				    	<input type="text" v-model="oldpasd" placeholder="填写当前登录密码">
				  	</div>
				  	<div class="input-row" style="padding:25px 0 0 5px;background:#F4F4F4">
						<p>请重新设置登录密码</p>
					</div>
				  	<div class="input-row">
				    	<label>设置新密码:</label>
				    	<input type="text" v-model="newpasd" placeholder="输入新密码">
				  	</div>
				  	<div class="input-row">
				   	 	<label>确认新密码:</label>
				   	 	<input type="text" v-model="newpasded" placeholder="再次填写密码">
				  	</div>
				</form>
				<div style="padding:10px;">
					<button class="btn btn-positive btn-block" @click="next"> 完成 </button>
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
				title : "更换密码",
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
				var oldpasd = this.oldpasd
				var newpasd = this.newpasd
				var newpasded = this.newpasded

				if(oldpasd !== this.pasd){
					return notify.error({
						duration : 1000,
						message : "登陆密码错误！"
					})
				}
				if(newpasd === ''){
					return notify.error({
						duration : 1000,
						message : "新密码不能为空！"
					})
				}
				if(newpasd !== newpasded){
					return notify.error({
						duration : 1000,
						message : "确认新密码不一致！"
					})
				}
				if(oldpasd === newpasd){
					return notify.error({
						duration : 1000,
						message : "新旧密码不能相同！"
					})
				}

				var btn = event.srcElement
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "更换成功！"
					})
					location.hash="!/me"
				}.bind(this),1000)
			}
		}
	})
})