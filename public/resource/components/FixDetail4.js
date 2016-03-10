define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	var Dialog = require("Dialog")
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
				</style>
				<ul class="table-view table-view-todoList" style="background:#fff;">
					<li class="table-view-cell finish" @click="cailiao">
						<a >
							<dl>
								<dt>耗材录入</dt>
								<dd></dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell finish" @click="paizhao">
						<a>
							<dl>
								<dt>拍照信息</dt>
								<dd></dd>
							</dl>
						</a>
					</li>
				</ul>
				<div style="padding:10px 10px 0;background:#fff;position:fixed;bottom:0;width:100%;">
					<button class="btn btn-primary btn-block" v-if="finish" @click="next">回单</button>
					<button disabled class="btn btn-primary btn-block" v-if="!finish">请先完成以上任务</button>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				finish : true
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "竣工 - 完善信息",
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
			back : function(){	
				location.hash="!/fixDetail"
			},
			cailiao : function(){	
				location.hash="!/fixDetail-cailiao1"
			},
			paizhao : function(){	
				location.hash="!/fixDetail-paizhao"
			},
			cesu : function(){	
				location.hash="!/fixDetail-cesu"
			},
			next : function(){	
				var dialog = Dialog({
					title: '回单',
					content: '<textarea rows="5" style="border:0" autofocus></textarea>',
					padding: 0,
					width : document.body.offsetWidth*80/100,
					button: [
						{
							value: '确认回单',
							callback: function () {
								dialog.close()
								this.pending = true
								setTimeout(function(){	
									notify.success({
										duration : 1000,
										message : "已回单！感谢您的辛苦劳动！"
									})
									this.pending = false
									location.hash="!/fix"
								}.bind(this),1000)
							}.bind(this)
						}
					]
				}).showModal();
			}
		}
	})
})