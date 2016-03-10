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
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>接线盒</dt>
								<dd>sa6</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>RJ45水晶头</dt>
								<dd>sw6</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>RJ11水晶头</dt>
								<dd>da6</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
					<li class="table-view-cell" @click="next">
						<a>
							<dl>
								<dt>分离器（单口）</dt>
								<dd>sa7</dd>
							</dl>
						</a>
					</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
				finish : true
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
			next : function(){	
				location.hash="!/fixDetail-cailiao-add-1"
			}
		}
	})
})