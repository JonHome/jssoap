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
					.table-view-todoList li dl dt{width:45%;}
					.table-view-todoList li dl dd{width:55%;text-align:right;color:#999;}
				</style>
				<ul class="table-view table-view-todoList" style="background:#fff;">
					<li class="table-view-cell" @click="modify">
						<a>
							<dl>
								<dt>机械接续光纤插头</dt>
								<dd>勘用料 / 1</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="modify">
						<a>
							<dl>
								<dt>机械接续光纤插座</dt>
								<dd>勘用料 / 1</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="modify">
						<a>
							<dl>
								<dt>RJ45水晶头</dt>
								<dd>勘用料 / 1</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="modify">
						<a>
							<dl>
								<dt>RJ11水晶头</dt>
								<dd>勘用料 / 1</dd>
							</dl>
						</a>
					</li>
				</ul>
				<div style="padding:0 10px;">
					<button class="btn btn-block" v-if="finish" @click="add">添加材料</button>
				</div>
				<div style="padding:10px 10px 0;background:#fff;position:fixed;bottom:0;width:100%;">
					<button class="btn btn-primary btn-block" v-if="finish" @click="next">材料录入完毕</button>
					<button disabled class="btn btn-primary btn-block" v-if="!finish"><i class="fa fa-spinner fa-spin"></i></button>
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
				title : "录入材料信息",
				label : "预警",
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
				location.hash="!/warningDetail3"
			},
			add : function(){	
				location.hash="!/warningDetail-cailiao-add"
			},
			modify : function(){	
				location.hash="!/warningDetail-cailiao-modify"
			},
			next : function(){	
				location.hash="!/warningDetail4"
			}
		}
	})
})