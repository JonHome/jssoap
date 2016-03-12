define(function(require){
	var Vue = require("Vue")
	var utils = require("utils")
	return Vue.extend({	
		template : utils.template(function(){/*
			<div class="content">
				Blank
			</div>
		*/}),
		compiled : function(){
			this.$dispatch("init",{
				title : "Blank",
				label : "Blank",
				showFooter : true,
				toolbar : [],
				leftbar : []
			})
		}
	})
})