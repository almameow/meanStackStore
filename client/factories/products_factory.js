////// Product Factory
storeModule.factory("ProductFactory", function($http){
	var factory = {};
	var products = [];

	factory.getProducts = function(callback){
		$http.get("/products").success(function(output){
			products = output;
			callback(products);
		})
	};

	// make AJAX request to /order to add order to db
	factory.addProduct = function(info, callback){
		$http.post("/add_product", info).success(function(output){
			console.log(output); 

			// This callback will be the getCustomer function which will update the list on the browser
			callback(output);
		})
	};
	// Return the factory so that everything inside of it is available to the CustomerController
	return factory;
});