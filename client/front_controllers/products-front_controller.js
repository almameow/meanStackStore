////// Products Controller
storeModule.controller("ProductsController", function($scope, ProductFactory){
	$scope.quantity = 5;

	// immediately run the getProducts function to load all products from db onto browser
	ProductFactory.getProducts(function(data){
		$scope.products = data;
	})

	// Add product to db
	$scope.addproduct = function(){
		console.log($scope.new_product);
		ProductFactory.addProduct($scope.new_product, function(info){
			if( info === "A product with this name already exists"){
				$scope.errormsg = info;
			}
			else{
				$scope.errormsg = "";
			}
			ProductFactory.getProducts(function(data){
				$scope.products = data;
				$scope.new_product = {};
			})

			//Reset form
			if (form) {
				$scope.form.$setPristine();
				$scope.form.$setUntouched();
			}
	
		});
	};
});