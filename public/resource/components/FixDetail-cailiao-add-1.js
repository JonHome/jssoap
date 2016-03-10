define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div  class="content">
				<style>
					.table-view-todoList li{
						padding-right:40px;
					}
					.table-view-todoList li a:not(.btn){	
						position: relative;
						display: block;
						padding: inherit;
						margin: -11px -45px -11px -15px;
						overflow: hidden;
						color: inherit;
					}
					.table-view-todoList li a:after{	
						position: absolute;
						top: 50%;
						right:15px;
						display: inline-block;
						font-family: Ratchicons;
						font-size: inherit;
						line-height: 1;
						color: #bbb;
						text-decoration: none;
						-webkit-transform: translateY(-50%);
						-ms-transform: translateY(-50%);
						transform: translateY(-50%);
						-webkit-font-smoothing: antialiased;
						content: '\e826'
					}
					.table-view-todoList li.finish dd{	
						background:url(resource/images/radio1.png) center right no-repeat;
					}
					.table-view-todoList li dl{display:table;width:100%;margin:0}
					.table-view-todoList li dl *{display:table-cell;}
					.table-view-todoList li dl dt{width:45%;}
					.table-view-todoList li dl dd{width:55%;text-align:right;color:#999;}
				</style>
				<ul class="table-view table-view-todoList" style="background:#fff;">
					<li class="table-view-cell">
						<dl>
							<dt>材料</dt>
							<dd>接线盒</dd>
						</dl>
					</li>
				</ul>
				<ul class="table-view table-view-zhifu">
					<li class="table-view-cell" @click="active(1)">勘用料 <button class="btn btn-radio" :class="actived===1?'active':''"></button></li>
					<li class="table-view-cell" @click="active(2)">计价料 <button class="btn btn-radio" :class="actived===2?'active':''"></button></li>
				</ul>
				<form class="input-group">
					<div class="input-row">
						<label>数量</label>
						<input type="text" placeholder="输入数量" style="text-align:right">
					</div>
				</form>
				<div style="padding:10px 10px 0;background:#fff;position:fixed;bottom:0;width:100%;">
					<button class="btn btn-positive  btn-block" v-if="!pending" @click="next">添加材料</button>
					<button disabled class="btn btn-positive btn-block" v-if="pending"><i class="fa fa-spinner fa-spin"></i></button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				actived : 1,
				pending : false,
				pending1 : false
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "添加材料",
				label : "修障",
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
				location.hash="!/fixDetail-cailiao1"
			},
			active : function(i){	
				this.actived = i
			},
			remove : function(){	
				this.pending1 = true
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					this.pending1 = false
					location.hash="!/fixDetail-cailiao1"
				}.bind(this),1000)
			},
			next : function(){	
				this.pending = true
				setTimeout(function(){	
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
					this.pending = false
					location.hash="!/fixDetail-cailiao1"
				}.bind(this),1000)
			}
		}
	})
})