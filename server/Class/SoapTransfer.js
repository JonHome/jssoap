'use strict'
const fs = require("fs")
const Path = require("path")
const agent = require("superagent")
const cheerio = require("cheerio")
const utils = require("./../utils")

//soap连接工具
class SoapTransfer {
	constructor(){
		//是否利用本地测试数据
		//如果本地缓存不存在则访问远端并写入文件
		this.fromCache = true
		//获得soap服务的物理地址
		this.url = require("./../../package.json").soap.url
	}
	//加壳并发送请求
	warpper(param,callback){
		let fileName = this.getLocalResponseFileName(param)
		if(this.fromCache && this.checkLocalResponse(fileName)){
			return callback(null,this.getLocalResponse(fileName))
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
			.timeout(10000)
			.end((err,res)=>{
				if(err)return callback(err)
				this.unwarpper(res.text,(err,result)=>{
					this.fromCache && this.setLocalResponse(fileName,result)
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
	//根据文件指纹生成文件名称，排除auth部分以免无法缓存
	getLocalResponseFileName(param){
		let $ = cheerio.load(param)
		param = $("service").text()
		return utils.md5(param)
	}
	//检查本地文件是否存在。测试用，所以采用同步写法
	checkLocalResponse(fileName){
		let path = Path.join(__dirname,"../","response",fileName+".xml")
		return fs.existsSync(path)
	}
	//将数据写入本地作为测试样本
	setLocalResponse(fileName,result){
		let path = Path.join(__dirname,"../","response",fileName+".xml")
		fs.writeFile(path,result,"utf8",(err)=>{
			err && console.log(err)
		})
	}
	//获得本地测试数据
	getLocalResponse(fileName){
		let path = Path.join(__dirname,"../","response",fileName+".xml")
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