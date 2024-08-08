export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},

/*	async CheckPostType () {
		
		var postTypes = [];
		if (CheckLoginPermissions.data.map(a=>a.PermissionKey).includes(21500))
			{
				postTypes.push(2);
			}
		if (CheckLoginPermissions.data.map(a=>a.PermissionKey).includes(21400))
			{
				postTypes.push(1);
			}
		if (CheckLoginPermissions.data.map(a=>a.PermissionKey).includes(21600))
			{
				postTypes.push(3);
			}
		if (CheckLoginPermissions.data.map(a=>a.PermissionKey).includes(21700))
			{
				postTypes.push(4);
			}
		return postTypes.join(',');
	},*/
	async  refreshPage () {		 
storeValue('paramFilter', 'toate').then(SelectNewsFeedType.run()).then(SelectNewsFeed.run()).then( resetWidget("Tabs2", true));
	},
	async fetchDetailsForAllItems () {
		console.log(PostList.listData);
  let items = PostList.listData;
    let apiPromises = [];
    var test = appsmith.store.valueOf();
    items.forEach(item => {
        // Log the current item to debug
        console.log("Current item:", item);
        storeValue('FileName',item.FileName);
        // Create an API call promise for the current item
			console.log(appsmith.store.FileName);
        let apiCall = Descarca_Imaginea.run()
            .then(response => {
                console.log(`Success for ${item.FileName}:`, response);
                return response;
            })
            .catch(error => {
                console.error(`Error for ${item.FileName}:`, error);
                throw error;  // Ensure the error is caught in the outer try-catch
            });
        
        // Add the API call promise to the array
        apiPromises.push(apiCall);
    });
    
    try {
        // Wait for all API calls to complete
        console.log("API promises:", apiPromises);
        let results = await Promise.all(apiPromises);
        
        // Handle the results (an array of JSON responses)
        console.log("Results:", results);
        
        // Optionally, you can update a widget or store the results in Appsmith's store
        storeValue("userDetails", results);
    } catch (error) {
        console.error("Error fetching details for all items:", error);
    }

	}
}