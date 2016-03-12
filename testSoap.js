'use strict'
const assert = require('assert')
const soap = require("./server/Class/Soap")

class TestCase{
	constructor(){}
	getActivityId(){
		let t1 = new Date-0
		soap.getActivityId({
			operator : "sa"
		},(err,result)=>{
			let t2 = (new Date-0)-t1
			console.log("testing getActivityId...","Loadtime:"+t2)
			assert.equal(err,null)
			assert.equal(typeof result.length,"number")
		})
	}
	getDictionary(){
		let t1 = new Date-0
		soap.getDictionary({
			operator : "sa",
			dictionary : "IDD_VISIT_IPOSSLOCATEFAULT_SPECIAITY"
		},(err,result)=>{
			let t2 = (new Date-0)-t1
			console.log("testing getDictionary...","Loadtime:"+t2)
			assert.equal(err,null)
			assert.equal(typeof result.length,"number")
		})
	}
	ipossOperate(){
		let t1 = new Date-0
		soap.ipossOperate({
			operator : "sa"
		},(err,result)=>{
			console.log(result)
			let t2 = (new Date-0)-t1
			console.log("testing ipossOperate...","Loadtime:"+t2)
			assert.equal(err,null)
			assert.equal(typeof result.length,"number")
		})
	}
	test(){
		//this.getActivityId()
		this.getDictionary()
		//this.ipossOperate()
	}
}
let testCase = new TestCase()
testCase.test()