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
			
		}
	}
})();