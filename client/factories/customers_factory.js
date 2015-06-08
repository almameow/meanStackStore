////// Customer Factory
storeModule.factory("CustomerFactory", function($http){
	var factory = {};
	var customers = [];

	factory.getCustomers = function(callback){
		$http.get("/customers").success(function(output){
			customers = output;
			callback(customers);
		})
	}

	// make AJAX request to /add in order to add customer to db
	factory.addCustomer = function(info, callback){
		$http.post("/add_customer", info).success(function(output){
			// This callback will be the getCustomer function which will update the list on the browser
			callback(output);
		})
	};

	factory.deleteCustomer = function(info, callback){
		$http.post("/delete/" + info).success(function(output){
			// This callback will be the getCustomer function which will update the list on the browser
			callback();
		})	
	};

	// Return the factory so that everything inside of it is available to the CustomerController
	return factory;
});