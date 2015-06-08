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
		OrderFactory.addOrder($scope.newOrder, function(info){
			if( info === "Error: Cannot buy more than is in stock." || info === "Error: All fields must be completed."){
				$scope.errormsg = info;
			}
			else{
				$scope.errormsg = "";
			}
			OrderFactory.getOrders(function(data){
				$scope.orders = data;
				$scope.new_order = {};
			})
		});
	};
});