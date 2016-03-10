define(function(require){
	var Vue = require("Vue")
	var template = require("utils").template
	return Vue.extend({	
		template : template(function(){/*
			<div>
				<ul class="ttab">
					<li @click="chgTab(1)" :class="tab===1?'active':''"><span>工单信息</span></li>
					<li @click="chgTab(3)" :class="tab===3?'active':''"><span>线路资料</span></li>
					<li @click="chgTab(4)" :class="tab===4?'active':''"><span>操作记录</span></li>
					<li class="empty"></li>
				</ul>
				<ul class="table-view table-view-detail" v-if="tab===1">
					<li class="table-view-cell">
						<dl>
							<dt>业务号码</dt>
							<dd>110876744</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>工单编号</dt>
							<dd>110876744</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>用户</dt>
							<dd>吴毓仁</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>电话</dt>
							<dd>13770723888</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>地址</dt>
							<dd>南京市浦口区沿江街道南浦路301号旭日上城一期小区36棟4单元1808室</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>业务类型</dt>
							<dd>LAN（智能小区）</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>是否新装</dt>
							<dd>否</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>支付方式</dt>
							<dd style="font-weight:bold;color:red">预付费</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>速率</dt>
							<dd>100M</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>申告现象</dt>
							<dd>用户来电表示宽带经常掉线，而且速度特别慢，用户意见很大，表示多次报修，要求这一次一定要维修好，我处正常指导用户重启之类的无效，要求派修，请处理。谢谢。</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>故障现象</dt>
							<dd>网络拨号连接异常中断（易掉线）</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>服务等级</dt>
							<dd>暂无</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>截止时间</dt>
							<dd>2016-02-01 16:00:00</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>装机时间</dt>
							<dd>2016-02-01 16:00:00</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>备注</dt>
							<dd>已进行一键检测。一键检测时间：2016-01-29 19:05:21,共体检9项，发现1检测不通过：检查一周内是否存在相同现象障碍的故障:不存在。是否IPV6私网双栈：公网单栈。检查RADIUS是否当天有错误提示：无错误提示。宽带用户帐号是否在线：在线。检查上网一周历史记录是否存在异常下线：存在异常。核对在线记录中不同mac地址条数未超过规定终端数：未超过。</dd>
						</dl>
					</li>
				</ul>
				<ul class="table-view table-view-detail" v-if="tab===3">
					<li class="table-view-cell">
						<dl>
							<dt>终端类型</dt><dd>E8-C</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>线路/设备类型</dt><dd>EPON宽带/null</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>E8-C终端序号</dt><dd>2578773AB2B6ADCA</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>OLT地址</dt><dd>泰山镇高新柳家口</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>OLT IP</dt><dd>9.5.69.2</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>ONU端口</dt><dd>E8-C_FE</dd>
						</dl>
					</li>
					<li class="table-view-divider">
						用户侧分光器
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>地址</dt><dd>南京市浦口区旭日上城一期GJ004</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>编码</dt><dd>PT-POS-36430954</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt>下联端子编码</dt><dd>OUT001</dd>
						</dl>
					</li>
				</ul>
				<ul class="table-view table-view-detail" v-if="tab===4">
					<li class="table-view-cell">
						<dl>
							<dt style="width:100px"><span class="badge badge-primary">拨号</span></dt>
							<dd style="Text-align:left">
								<p style="color:#444;">刘栋栋</p>
								<p>网盈江浦高新班组</p>
								<p>2016-01-30 08:57:52</p>
							</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt style="width:100px"><span class="badge badge-primary">语音处理</span></dt>
							<dd style="Text-align:left">
								<p style="color:#444;">刘栋栋</p>
								<p>网盈江浦高新班组</p>
								<p>2016-01-29 19:43:00</p>
							</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt style="width:100px"><span class="badge badge-primary">语音处理</span></dt>
							<dd style="Text-align:left">
								<p style="color:#444;">刘栋栋</p>
								<p>网盈江浦高新班组</p>
								<p>2016-01-29 19:42:57</p>
								<p>外呼成功：外呼成功</p>
							</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt style="width:100px"><span class="badge badge-primary">定性</span></dt>
							<dd style="Text-align:left">
								<p style="color:#444;">周萍</p>
								<p>南京区域中心普通</p>
								<p>2016-01-29 19:40:42</p>
								<p>请查：派工给：刘栋栋（工号：nj0902070067,tel:15380406732）</p>
							</dd>
						</dl>
					</li>
					<li class="table-view-cell">
						<dl>
							<dt style="width:100px"><span class="badge badge-primary">受理</span></dt>
							<dd style="Text-align:left">
								<p style="color:#444;">董晶晶</p>
								<p>南京区域中心</p>
								<p>2016-01-29 19:09:50</p>
								<p>下步处理者:鼓楼人力综合调度中心</p>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		*/}),
		data : function(){
			return {
				tab :1 
			}
		},
		compiled : function(){
		},
		events : {
		},
		methods : {
			chgTab : function(i){
				this.tab = i
			}
		}
	})
})