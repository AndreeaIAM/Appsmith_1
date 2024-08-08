export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		navigateTo('https://beta5.selmor.ro/appsmith?urlParam=modul-newsfeed%2Fnewsfeed-667ab21ebcfb414bef9929d0%3Fembed%3Dtrue%26m%3D<machinekey>%26t%3D<idtoken>%26l%3D<locationId>', {},'NEW_WINDOW')
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	},
	getFormattedSelectedOptions() {
  const selectedOptions = LocationType.selectedOptionValues;
  return selectedOptions.map(option => `${option}`).join(', ');
},
		async CheckPostType () {
		
		var postTypes = [];
		if (Get_Permissions.data.map(a=>a.PermissionKey).includes(21500))
			{
				postTypes.push(2);
			}
		if (Get_Permissions.data.map(a=>a.PermissionKey).includes(21400))
			{
				postTypes.push(1);
			}
		if (Get_Permissions.data.map(a=>a.PermissionKey).includes(21600))
			{
				postTypes.push(3);
			}
		if (Get_Permissions.data.map(a=>a.PermissionKey).includes(21700))
			{
				postTypes.push(4);
			}
		return postTypes.join(',');
	}
}