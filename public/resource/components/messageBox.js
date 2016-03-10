define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div>
				<style>
					.list-unstyled{margin:10px}
					.list-unstyled li{margin:10px 0}
					.list-unstyled .badge{background:#ccc}
				</style>
				<ul class="list-unstyled">
					<li v-for="msg in message" track-by="$index">
						{{msg}}
					</li>
				</ul>
			</div>
		*/}),
		props : {
			"message" : Array
		}
	})
})