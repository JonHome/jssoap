'use strict'
const cheerio = require("cheerio")
const utils = require("./../utils")
const SoapTransfer = require("./SoapTransfer")

//soap业务接口
class Soap extends SoapTransfer {
	constructor(){
		super()
	}
	//获取字典
	getDictionary(data,callback){
		let router = "coInterfaceBO.dictionaryItem"
		let xml = `<dictionaryCode>${data.dictionary}</dictionaryCode>`
		xml = this.simplePreWarpper(data.operator,router,xml)
		this.warpper(xml,(err,result)=>{
			if(err)return callback(err)
			return callback(null,this.simpleListTransfer(result,"dictionaryItem"))
		})
	}
	//获取检测项
	getActivityId(data,callback){
		let router = "predealInterfaceBO.getActivityId"
		let xml = `<operId>00001</operId>
			<productNativeNetId>025</productNativeNetId>
			<complaintCause>L000002</complaintCause>
			<specialtyId>0001415</specialtyId>
			<faultCode>B00128586</faultCode>
			<accessType>EPON-FTTH</accessType>
			<termType>E8-C</termType>
			<cnType>IMS</cnType>
			<errCode></errCode>
			<clientIP>132.228.91.43</clientIP>
			<billId>2012002343242343</billId>
			<netAccount>b00128586</netAccount>
			<sessionId/>`
		xml = this.simplePreWarpper(data.operator,router,xml)
		this.warpper(xml,(err,result)=>{
			if(err)return callback(err)
			return callback(null,this.simpleListTransfer(result,"actList"))
		})
	}
}
/*
测试用例
const soap = new Soap()
console.log(soap)
soap.getActivityId({
	operator : "sa"
},(err,result)=>{
	if(err)console.log(err.stack)
	console.log(result)
})
soap.getDictionary({
	operator : "sa",
	dictionary : "IDD_VISIT_IPOSSLOCATEFAULT_SPECIAITY"
},(err,result)=>{
	if(err)console.log(err.stack)
	console.log(result)
})
*/
module.exports = new Soap()