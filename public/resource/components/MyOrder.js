define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div>
				<div v-if="statu==='pending'" style="padding:10px;text-align:center;">
					<i class="fa fa-spinner fa-spin"></i>
				</div>
				<div v-if="!list.length&&statu!=='pending'" class="empty">
					<i class="fa fa-exclamation-circle"></i>
				</div>
				<ul class="table-view" v-if="list.length">
					<li class="table-view-cell media" v-for="row in list" track-by="$index">
						<img class="media-object pull-left" src="resource/images/icon.png">
						<div class="cell-body">
							{{row.specialtyName}}
							<p>
								<span class="badge" :class="{'badge-negative':row.shareTypeName==='加急'}" v-if="row.shareTypeName">
									{{row.shareTypeName}}
								</span>
								<span class="badge" v-if="row.shareSrcName">
									{{row.shareSrcName}}
								</span>
							</p>
							<p v-if="row.contactPhone">
								<a :href="'tel:'+row.contactPhone">
									<i class="fa fa-phone"></i>
									{{row.contactor}}
								</a>
							</p>
							<p v-if="row.address">
								<i class="fa fa-home"></i>
								{{row.address}}
							</p>
						</div>
						<button class="btn btn-primary" @click="dispose(row)" v-if="row.statu==='init'">
							处理
						</button>
						<button class="btn" v-if="row.statu==='pending'">
							<i class="fa fa-spinner fa-spin"></i>
						</button>
					</li>
				</ul>
				<div v-if="feaching==='pending'" style="padding:10px;text-align:center;">
					<i class="fa fa-spinner fa-spin"></i>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				begin : 0,
				count : 0,
				pageSize : 5,
				statu : "init",
				feaching : "init",
				list : []
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "已抢工单",
				toolbar : [
					{
						"icon" : "fa fa-refresh",
						"method" : function(){
							this.renew()
						}.bind(this)
					}
				]
			})
			this.renew()
		},
		events : {
			scroll : function(){
				if(this.count > this.list.length && this.feaching!=="pending"){
					this.append(this.begin+this.pageSize)
				}
			}
		},
		methods : {
			dispose : function(order){
				order.statu = "pending"
				androidObj.toAndroidDetailPage(JSON.stringify(order))
				order.statu = "init"
			},
			fetch : function(begin,callback){
				var self = this
				this.statu = "pending"
				var url = "/action/sharedBill"
				var data = {
					loginName : window.loginName,
					businessId : "0002555",
					pageSize : this.pageSize,
					begin : begin
				}
				ajax(url,data,function(result){
					if(result.statu !== 1)return notify.error({
						duration : 1000,
						message : result.message
					})
					self.statu = "init"
					callback && callback(result)
				},function(){
					self.statu = "init"
				})
			},
			append : function(begin){
				var self = this
				this.feaching = "pending"
				this.fetch(begin,function(result){
					var data = result.data
					data.list.length && data.list.forEach(function(row){
						row.statu = "init"
						self.list.push(row)
					})
					self.begin = data.pager.begin
					self.count = data.pager.count
					self.feaching = "init"
				})
			},
			renew : function(callback){
				var self = this
				this.fetch(0,function(result){
					var data = result.data
					data.list.length && data.list.forEach(function(row){
						row.statu = "init"
					})
					self.list = data.list
					self.begin = data.pager.begin
					self.count = data.pager.count
					callback && callback(result.data)
				})
			}
		}
	})
})