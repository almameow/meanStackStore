// Create Store Module
var storeModule = angular.module("storeApp", ['ngRoute']);

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
		.when("/product/:id", {
			templateUrl: "partials/product.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});