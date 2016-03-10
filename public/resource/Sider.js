/*
右侧滑组件
*/
define(function(require){
	var $ = require("jquery")
	var ejs = require("ejs")
	var utils = require("./utils")
	function Sider(args,callback){
		var template = utils.template(function(){/*
			<div class="back-drop"></div>
			<menu>
				<% list.forEach(function(row){ %>
				<ul class="table-view">
					<% if(row.label){ %>	
						<li class="table-view-divider"><%=row.label%></li>
					<% } %>
					<% row.methods && row.methods.forEach(function(col){ %>
						<li class="table-view-cell"><%=col%></li>
					<% }) %>
				</ul>
				<% }) %>
			</menu>
		*/})
		template = ejs.render(template,{list:args})
		var firstChild = $("body").children().eq(0)
		var sider = $("<sider></sider>").html(template).addClass("active").insertBefore(firstChild)
		utils.offloadFn(function(){
			sider.find(".back-drop").addClass("active")
			sider.find("menu").addClass("active")
		})
		sider.close = function(){
			sider.find(".back-drop").removeClass("active")
			sider.find("menu").removeClass("active")
			setTimeout(function(){
				sider.remove()
				args.onClose && args.onClose()
			},300)
		}
		sider.delegate(".table-view-cell","click",function(){
			callback && callback(this.innerHTML)
			sider.close()
		})
		sider.delegate(".back-drop","click",function(){
			sider.close()
		})
		return sider
	}
	return Sider;
});