define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div class="content">
				<ul class="grids r1" style="margin-top:10px">
					<li class="grids-header ">
						<h3>谁知道如何处理691故障？</h3>
					</li>
					<li class="grids-body">
1、用户数据绑定错误：为了更好的服务于用户,，保障用户帐号的安全，电信将宽带帐号和用户的物理端口做了绑定，数量上也做了一对一的邦定,这样，该帐号只能在一个物理端口上使用（即限制了ADSL帐号的漫游）,而且一个端口只限一台电脑上网,如果用户的数据绑定错误，拨号时也会出现错误691的提示。<br />
2、帐号被他人盗用：在宽带帐号没有绑定之前，ADSL用户的帐号经常会被他人盗用。一旦ADSL宽带帐号被他人使用，再次拨号时，系统也会出现错误691的提示。<br />
3、帐号欠费：ADSL宽带用户欠费后，宽带接入服务商会将该帐号暂时停用，用户交清欠费后，帐号不一定会马上启用，这时如果拨号，也会出现错误691的提示。<br />
4、用户名密码错误：当然，宽带拨号时出现错误691，也可能是因为帐号和密码错误的原因造成的。用户在处理错误691的故障时一定要仔细判断，尤其是帐号前与后的空格，很难分辨出来。所以当出现691错误时，首先把原来的帐号和密码删掉，重新输入正确帐号及密码。<br />
5、电脑硬件原因：当电脑上安装了两块网卡并且都启用时。导致MAC地址邦定错误，出现691错误代 码.建议禁用其中一快网卡。<br />
注：当您有二台以上电脑同进拔号上网时。
					</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
			}
		},
		compiled : function(){
			this.$dispatch("init",{
				title : "消息",
				label : "首页",
				leftbar : [
					{
						"icon" : "icon icon-left-nav",
						"method" : function(){
							this.back()
						}.bind(this)
					}
				],
				toolbar : []
			})
		},
		methods : {
			back : function(){
				history.go(-1)
			}
		}
	})
})