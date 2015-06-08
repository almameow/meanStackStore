////// Orders Controller
storeModule.controller("OrdersController", function($scope, OrderFactory){
	$scope.quantity = 4;

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
			if(info === "Cannot buy more than is in stock."){
				$scope.errormsg = info;
			}
			else{
				$scope.errormsg = "";
			}
			OrderFactory.getOrders(function(data){
				$scope.orders = data;
				$scope.new_order = {};
			})

			//Reset form
			if (form) {
				$scope.form.$setPristine();
				$scope.form.$setUntouched();
			}
		});
	};

	$scope.deleteorder = function(data){
		console.log(data._id);
		OrderFactory.deleteOrder(data._id, function(){
			OrderFactory.getOrders(function(info){
				$scope.orders = info;
			})
		})
	}
});