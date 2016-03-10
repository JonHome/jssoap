define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<style>
					.table-view-zhifu li{padding-left:55px;}
					.table-view-zhifu li.zhifu1{background:url(resource/images/zhifu-1.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu2{background:url(resource/images/zhifu-2.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu3{background:url(resource/images/zhifu-3.png) 10px center no-repeat}
					.table-view-zhifu li.zhifu4{background:url(resource/images/zhifu-4.png) 10px center no-repeat}
				</style>
				<div style="background:#fff">
					<ul class="table-view table-view-detail ">
						<li class="table-view-cell" v-for="row in list">
							<dl>
								<dt>{{row.key}}</dt>
								<dd :class="row.style">{{row.value}}</dd>
							</dl>
						</li>
					</ul>
				</div>
				<div style="background:#fff;margin:10px 0">
					<ul class="table-view table-view-zhifu">
						<li class="table-view-cell zhifu4" @click="active(4)">翼支付 <button class="btn btn-radio" :class="actived===4?'active':''"></button></li>
						<li class="table-view-cell zhifu1" @click="active(1)">银行卡支付 <button class="btn btn-radio" :class="actived===1?'active':''"></button></li>
						<li class="table-view-cell zhifu2" @click="active(2)">微信支付 <button class="btn btn-radio" :class="actived===2?'active':''"></button></li>
						<li class="table-view-cell zhifu3" @click="active(3)">支付宝支付 <button class="btn btn-radio" :class="actived===3?'active':''"></button></li>
					</ul>
				</div>
				<div style="padding:0 10px 10px 10px">
					<button class="btn btn-primary btn-block" @click="next">支付</button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				list : [
					{key:"商品名称",value:"江苏电信"},
					{key:"订单编号",value:"10152015061111335810041"},
					{key:"应付金额",value:"4.00元",style:"important"}
				],
				actived : 4
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "充值缴费",
				label : "营销",
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
				history.go(-1)
			},
			active: function(i){	
				this.actived = i
			},
			next : function(){	
				alert("跳转到第三方支付")
				notify.success({
					duration : 1000,
					message : "支付成功！"
				})
				setTimeout(function(){	
					location.hash="!/business"
				},1000)
			}
		}
	})
})