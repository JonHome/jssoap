'use strict'
const fs = require("fs")
const Path = require("path")
const agent = require("superagent")
const cheerio = require("cheerio")
const utils = require("./../utils")

//soap连接工具
class SoapTransfer {
	constructor(){
		//true 从原始地址获取数据，false：从本地读取测试数据
		this.dataSource = true
		this.url = require("./../../package.json").soap.url
	}
	//加壳并发送请求
	warpper(param,callback){
		if(!this.dataSource){
			return callback(null,this.getLocalResponse(param))
		}
		let string = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://serverside.agent.webservice.ccssoft.com">
		   <soapenv:Header/>
		   <soapenv:Body>
		      <ser:invokeServer soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
		         <xml xsi:type="soapenc:string" xs:type="type:string" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xs="http://www.w3.org/2000/XMLSchema-instance"><![CDATA[${param}]]></xml>
		      </ser:invokeServer>
		   </soapenv:Body>
		</soapenv:Envelope>`
		agent
			.post(this.url)
			.set("Content-Type","text/xml; charset=UTF-8")
			.set("SoapAction"," ")
			.send(string)
			.end((err,res)=>{
				if(err)return callback(err)
				this.unwarpper(res.text,function(err,result){
					callback && callback(err,result)
				})
			})
	}
	//脱壳
	unwarpper(soapResult,callback){
		let $ = cheerio.load(soapResult)
		let text = $("invokeServerReturn").text()
		$ = cheerio.load(text,{xmlMode:true})
		let status = $("status").eq(0).text()
		if(status !== "200 OK")return callback(new Error(status))
		callback(null,text)
	}
	//获得本地测试数据
	getLocalResponse(param){
		let $ = cheerio.load(param)
		let fileName = $("ServCode").text()
		let path = Path.join(__dirname,"response",fileName+".xml")
		return new Buffer(fs.readFileSync(path)).toString()
	}
	//简单通用的列表转换工具
	simpleListTransfer(result,listKey){
		let $ = cheerio.load(result,{xmlMode:true})
		let json = []
		$(listKey).map(function(i,row){
			let data = {}
			$(this.children).map((n,col) => {
				if(col.name){
					let value = $(col).text()
					if(value === "null")value = ""
					data[col.name] = value
				}
			})
			json.push(data)
		})
		return json
	}
	//简单封装为标准的soap报文
	simplePreWarpper(operator,router,xml){
		let authInfo = utils.getAuthInfo()
		let date = authInfo.date
		let key = authInfo.key
		let string = `<?xml version="1.0" encoding="UTF-8"?>
		<Root>
		    <Header>
		        <Time>${date}</Time>
		        <ServCode>${router}</ServCode>
		        <AuthCode>${key}</AuthCode>
		        <Operator>${operator}</Operator>
		        <clientType></clientType>
		    </Header>
		    <Body>
	          <service>
	            <router>${router}(parameterXML)</router>
	            <data_info>${xml}</data_info>
	          </service>
		    </Body>
		</Root>`
		return string
	}
}
module.exports = SoapTransfer