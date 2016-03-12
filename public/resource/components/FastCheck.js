define(function(require){
	var Vue = require("Vue")
	var Promise = require("Promise")
	var utils = require("utils")
	return Vue.extend({	
		template : utils.template(function(){/*
			<div class="content">
				<div v-if="pending">{{text}}</div>
				<div v-if="!pending">
					<div v-if="category.checkList.length" v-for="category in checkList" track-by="$index">
						<strong>{{category.itemName}}</strong>
						<div v-for="row in category.checkList">{{row.activityName}}</div>
					</div>
				</div>
			</div>
		*/}),
		data : function(){
			return {
				pending : false,
				checkList : {},
				text : ""
			}
		},
		methods : {
			init : function(){
				var category,checkList
				this.pending = true
				this.text = "正在加载检测项分类..."
				this.getCategoryAsync()
					.then(function(result){
						category = result
						this.text = "正在加载检测项..."
						return this.getCheckListAsync()
					}.bind(this))
					.then(function(result){
						checkList = result
						this.checkList = this.formatData(category,checkList)
						this.pending = false
					}.bind(this))
					.catch(function(err){
						this.pending = false
					}.bind(this))
			},
			formatData : function(categorys,checkList){
				var category = {}
				categorys.forEach(function(row){
					row.checkList = []
					category[row.itemCode] = row
				}.bind(this))
				checkList.forEach(function(row){
					if(row.catalogId && category[row.catalogId]){
						category[row.catalogId].checkList.push(row)
					}
				}.bind(this))
				console.log(JSON.parse(JSON.stringify(category)))
				return category
			},
			//获得加载项分类
			getCategoryAsync : function(){
				return new Promise(function(resolve,reject){
					var url = "/action/getDictionary?dictionary=IDD_PRE_AI_CATALOG"
					utils.get(url,function(result){
						resolve(result)
					}.bind(this),function(ajax,error){
						reject(error)
					})
				}.bind(this))
			},
			//获得加载项
			getCheckListAsync : function(){
				return new Promise(function(resolve,reject){
					var url = "/action/getActivityId"
					utils.get(url,function(result){
						resolve(result)
					}.bind(this),function(ajax,error){
						reject(error)
					})
				}.bind(this))
			}
		},
		events : {
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "一键检测",
				label : "一键检测",
				showFooter : true,
				toolbar : [],
				leftbar : []
			})
			this.init()
		}
	})
})