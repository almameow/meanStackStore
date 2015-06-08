////// One Product Controller
storeModule.controller("OneProductController", function($scope, $routeParams, $location, ProductFactory) {
	
	// Immediately call on factory to grab product with specific ID
	ProductFactory.getOneProduct($routeParams.id, function(data){
		if(data.category == "accessory"){
			data.category = "Accessory";
		} else if (data.category == "shirt"){
			data.category = "Shirt/Coat";
		} else if (data.category == "pant"){
			data.category = "Pants";
		} else if (data.category == "shoe"){
			data.category = "Shoes";
		}
		$scope.product = data;
	});

	// call on factory to remove a quiz from the database
	$scope.removeProduct = function(product){
		ProductFactory.removeProduct(product, function() {
			// Redirect to products page
			$location.path("/products");
		})
	}
})