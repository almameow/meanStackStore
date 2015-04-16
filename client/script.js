// Create Store Module
var storeModule = angular.module("miniStoreApp", ['ngRoute']);

// Use the config method to set up routing for partials
storeModule.config(function ($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/dashboard.html"
		})
		.when("/products", {
			templateUrl: "partials/products.html"
		})
		.when("/orders", {
			templateUrl: "partials/orders.html"
		})
		.when("/customers", {
			templateUrl: "partials/customers.html"
		})
		.when("/settings", {
			templateUrl: "partials/settings.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});

////// Customers Controller
storeModule.controller("CustomersController", function($scope, CustomerFactory){
	$scope.quantity = 3;

	CustomerFactory.getCustomers(function(data){
		$scope.customers = data;
	});

	$scope.addcustomer = function(){
		CustomerFactory.addCustomer($scope.new_customer, function(){
			CustomerFactory.getCustomers(function(data){
				$scope.customers = data;
				$scope.new_customer = {};
			});
		});
	};

	$scope.deletecustomer = function(data){
		console.log(data._id);
		CustomerFactory.deleteCustomer(data._id, function(){
			CustomerFactory.getCustomers(function(info){
				$scope.customers = info;
			})
		})
	}
});

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
		$http.post("/add", info).success(function(output){
			// This callback will be the getCustomer function which will update the list on the browser
			callback();
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


////// Orders Controller
storeModule.controller("OrdersController", function($scope, OrderFactory){
	$scope.quantity = 3;

	// immediately run the getOrders, getCustomers, and getProducts functions to load all orders and users from db onto browser
	OrderFactory.getOrders(function(data){
		$scope.orders = data;
	})

	OrderFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	OrderFactory.getProducts(function(data){
		$scope.products = data;
	})

	// Add order to db
	$scope.addorder = function(){
		console.log($scope.newOrder);
		OrderFactory.addOrder($scope.newOrder, function(){
			OrderFactory.getOrders(function(data){
				$scope.orders = data;
				$scope.new_order = {};
			})
		});
	};
});

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
			callback();
		})
	};
	// Return the factory so that everything inside of it is available to the CustomerController
	return factory;
});

////// Products Controller
storeModule.controller("ProductsController", function($scope, ProductFactory){
	$scope.quantity = 5;
	// immediately run the getProducts function to load all products from db onto browser
	ProductFactory.getProducts(function(data){
		$scope.products = data;
	})

	// Add order to db
	$scope.addproduct = function(){
		// console.log($scope.new_product);
		ProductFactory.addProduct($scope.new_product, function(){
			ProductFactory.getProducts(function(data){
				$scope.products = data;
				$scope.new_product = {};
			})
		});
	};
});

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
			console.log(output); //I don't know how to get the error to the browser...I wanted to make it a $scope var and have ng-bind p tag waiting for the $scope error msg var to be defined, then error will appear. But...don't know how to get erro from Factory to Controller

			// This callback will be the getCustomer function which will update the list on the browser
			callback();
		})
	};
	// Return the factory so that everything inside of it is available to the CustomerController
	return factory;
});