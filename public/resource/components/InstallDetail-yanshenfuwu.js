define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div  class="content" style="margin-bottom:70px;">
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
					.table-view-todoList li dl dt{width:35%;}
					.table-view-todoList li dl dd{width:65%;text-align:right;color:#999;}
					.table-view-zhifu li{padding-left:55px;}
					.table-view-zhifu li.zhifu1{background:url(resource/images/zhifu-1.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu2{background:url(resource/images/zhifu-2.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu3{background:url(resource/images/zhifu-3.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu4{background:url(resource/images/zhifu-4.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu5{background:url(resource/images/zhifu-5.png) 10px center no-repeat}

					.input-group .input-row label{}
					.input-group .input-row input{text-align:right}
				</style>
				<form class="input-group" style="margin:0 0 10px 0">
				  	<div class="input-row">
				    	<label>WIFI豪华礼包</label>
				    	<input type="text" placeholder="填写数量">
				  	</div>
				  	<div class="input-row">
				   	 	<label>夜间上门费</label>
				   	 	<input type="text" placeholder="填写数量">
				  	</div>
				  	<div class="input-row">
				   	 	<label>白天上门费</label>
				   	 	<input type="text" placeholder="填写数量">
				  	</div>
				  	<div class="input-row">
				   	 	<label>路由器调测费</label>
				   	 	<input type="text" placeholder="填写数量">
				  	</div>
				</form>
				<ul class="table-view table-view-detail ">
					<li class="table-view-cell">
						<div class="toggle pull-right" :class="sign?'active':''" @click="chgSign">
							<div class="toggle-handle"></div>
						</div>
						<dl>
							<dt>同意现场支付</dt>
						</dl>
					</li>
				</ul>
				<div style="background:#fff;margin:10px 0" v-if="sign">
					<ul class="table-view table-view-zhifu">
						<li class="table-view-cell zhifu4" @click="active(4)">翼支付 <button class="btn btn-radio" :class="actived===4?'active':''"></button></li>
						<li class="table-view-cell zhifu1" @click="active(1)">银行卡支付 <button class="btn btn-radio" :class="actived===1?'active':''"></button></li>
						<li class="table-view-cell zhifu2" @click="active(2)">微信支付 <button class="btn btn-radio" :class="actived===2?'active':''"></button></li>
						<li class="table-view-cell zhifu3" @click="active(3)">支付宝支付 <button class="btn btn-radio" :class="actived===3?'active':''"></button></li>
						<li class="table-view-cell zhifu5" @click="active(5)">扫码支付 <button class="btn btn-radio" :class="actived===5?'active':''"></button></li>
					</ul>
				</div>
				<div style="padding:10px 10px 0;">
					<button class="btn btn-primary btn-block" @click="next">下一步</button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				sign : false,
				actived : 4
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "延伸服务",
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
			active: function(i){	
				this.actived = i
			},
			chgSign : function(){
				this.sign = !this.sign
			},
			back : function(){	
				location.hash="!/installDetail0"
			},
			next : function(){	
				location.hash="!/installDetail3"
			}
		}
	})
})