////// Order Factory
storeModule.factory("OrderFactory", function($http){
	var factory = {};
	var customers = [];
	var orders = [];
	var products = [];

	factory.getOrders = function(callback){
		$http.get("/orders").success(function(output){
			orders = output;
			callback(orders);
		})
	};

	factory.getCustomers = function(callback){
		$http.get("/customers").success(function(output){
			customers = output;
			callback(customers);
		})
	};

	factory.getProducts = function(callback){
		$http.get("/products").success(function(output){
			products = output;
			callback(products);
		})
	};

	// make AJAX request to /order to add order to db
	factory.addOrder = function(info, callback){
		$http.post("/order", info).success(function(output){
			// This callback will be the getCustomer function which will update the list on the browser
			callback(output);
		})
	};
	// Return the factory so that everything inside of it is available to the CustomerController
	return factory;
});