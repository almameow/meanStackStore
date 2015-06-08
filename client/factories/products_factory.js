////// Product Factory
storeModule.factory("ProductFactory", function($http){
	var factory = {};
	var products = [];

	// get all products
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

	// get one product with specific ID
	factory.getOneProduct = function(data, callback){
		$http.post('/get_product/'+ data).success(function(data){
			callback(data);
		})
	};

	// remove a quiz from the database
	factory.removeProduct = function(info, callback) {
		$http.post('/remove_product', info).success(function(output){
			callback(output);
		})
	};
	
	return factory;
});