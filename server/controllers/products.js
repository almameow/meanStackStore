// This is /server/controllers/products.js

// Require mongoose and Product model
var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function(){
	return{

		// pull all products from DB
		products: function(req, res){
			Product.find({}, function(error, results){
				if(error){
					console.log(error);
				} else {
					res.json(results);
				}
			})
		},

		// add product to db
		add: function(req, res){
			var newProduct = new Product(req.body);
			console.log("Inside backend controller:", req.body);
			// If product with same name as user input already exists in db, do not add to db
			Product.findOne({name: req.body.name}, function(error, response){ 
				if(response){ //product exists
					console.log("Product name already exists in db");
					res.send("A product with this name already exists");
				}
				else{
					// Call .save function
					newProduct.save(function(error, results){
						if(error){
							console.log("Did not save new order to db");
						} else {
							console.log("Successfully saved new order to db");
							res.json(results);
						}
					});
				}
			})
		},

		remove: function(req, res) {
			Product.remove({_id: req.body._id}, function(err, response) {
				if(err) {
					console.log('Product was not deleted.');
				}
				else {
					console.log("Product was successfully deleted.");
					res.json(response);
				}
			})
		},

		getOneProduct: function(req, res){
			Product.find({_id: req.params.id}, function(err, data){
				if(err)
				{
					console.log("Error: Product was not grabbed from the database.");
				} else {
					console.log("Product successfully grabbed from database.")
					res.json(data[0]);
				}
			})
		}
	}
})();