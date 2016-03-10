define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="filterBox">
				<div class="filter" :style="{height:height+'px',bottom:0}">
					<ul class="row">
						<li @click="action($event)"><span>回单</span></li>
						<li @click="action($event)"><span>反馈</span></li>
						<li @click="action($event)"><span>请求</span></li>
						<li @click="action($event)"><span>配置SN</span></li>
					</ul>
					<ul class="row">
						<li @click="action($event)"><span>语音更线</span></li>
						<li @click="action($event)"><span>更换E8-C</span></li>
						<li @click="action($event)"><span>错误信息</span></li>
						<li @click="action($event)"><span>宽带解绑</span></li>
					</ul>
					<ul class="row">
						<li @click="action($event)"><span>密码查询</span></li>
						<li @click="action($event)"><span>密码复位</span></li>
						<li @click="action($event)"><span>故障定位</span></li>
						<li @click="action($event)"><span>转派</span></li>
					</ul>
					<ul class="row">
						<li @click="action($event)"><span>材料补录</span></li>
						<li @click="action($event)"><span>拍照</span></li>
						<li @click="action($event)"><span>疑难反馈</span></li>
						<li @click="action($event)"><span>历史查询</span></li>
					</ul>
					<ul>
						<li @click="action($event)"><span>一键检测</span></li>
						<li @click="action($event)"><span>个人库存</span></li>
						<li @click="action($event)"><span>在线更纤</span></li>
						<li @click="action($event)"><span v-if="this.type">指派</span></li>
					</ul>
					<div style="padding:10px 10px 0;">
						<slot></slot>
					</div>
				</div>
				<div class="back-drop active" @click="toggle(false)"></div>
			</div>
		*/}),
		props : {
			height : {
				type : Number,
				default : 320
			},
			type : String,
			toggle : Function,
			show : Boolean
		},
		compiled : function(){
		},
		methods : {
			zhipai : function(){
				location.href="zhipai.html"
			},
			yijianjiance : function(){
				location.hash="!/yijianjiance"
			},
			zaixiangengxian : function(){
				location.hash="!/installDetail-zaixiangengxian"
			},
			action : function(event){
				var btn = event.srcElement
				var text = btn.innerHTML
				var tmpText = "<i class='fa fa-spinner fa-spin'></i>"
				btn.innerHTML = tmpText
				btn.disabled = true
				setTimeout(function(){
					btn.innerHTML = text
					btn.disabled = false
					if(text==="指派")return this.zhipai()
					if(text==="一键检测")return this.yijianjiance()
					if(text==="在线更纤")return this.zaixiangengxian()
					notify.success({
						duration : 1000,
						message : "操作成功！"
					})
				}.bind(this),1000)
			},
		}
	})
})