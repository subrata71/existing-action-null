export default {
	myVar1: [],
	myVar2: {},
	getUserEmail () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		return appsmith.user.username;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}