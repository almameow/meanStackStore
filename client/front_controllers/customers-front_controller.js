////// Customers Controller
storeModule.controller("CustomersController", function($scope, CustomerFactory){
	$scope.quantity = 4;

	CustomerFactory.getCustomers(function(data){
		$scope.customers = data;
	});

	$scope.addcustomer = function(){
		CustomerFactory.addCustomer($scope.new_customer, function(info){
			if(info === "A customer with this name already exists."){
				$scope.errormsg = info;
			}
			else{
				$scope.errormsg = "";
			}
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