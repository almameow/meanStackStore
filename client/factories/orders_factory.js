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

	// add order to db
	factory.addOrder = function(info, callback){
		$http.post("/order", info).success(function(output){
			callback(output);
		})
	};

	factory.deleteOrder = function(info, callback){
		$http.post("/remove_order/" + info).success(function(output){
			callback();
		})	
	};
	return factory;
});