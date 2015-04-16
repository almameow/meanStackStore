// This is /server/controllers/orders.js

// Require mongoose and Order model
var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");

module.exports = (function(){
	return{

		// pull all orders from DB
		orders: function(req, res){
			Order.find({}, function(error, results){
				if(error){
					console.log(error);
				} else {
					res.json(results);
				}
			})
		},

		// pull all customers from DB
		all_customers: function(req, res){
			Customer.find({}, function(error, results){
				if(error){
					console.log(error);
				} else {
					// console.log("Customers json results: ", results);
					res.json(results);
				}
			})
		},

		// pull all products from DB
		products: function(req, res){
			Product.find({}, function(error, results){
				if(error){
					console.log(error);
				} else {
					// console.log("Customers json results: ", results);
					res.json(results);
				}
			})
		},

		// add order to db
		order: function(req, res){
			var newOrder = new Order(req.body);

			Product.findOne({name: req.body.product}, function(error, product){ // Find db quantity of item
				var diff = product.quantity - req.body.quantity;

				if( diff > 0){ // If db quantity - req.body.quantity > 0
					Product.update({name: req.body.product}, {quantity: diff}, function(error, product){ // update quantity in db
						console.log("Updated the quantity");
						// Call .save function
						newOrder.save(function(error, results){
							if(error){
								console.log("Did not save new order to db");
							} else {
								console.log("Successfully saved new order to db");
								res.json(results);
							}
						});
					})
				} else { // Else, throw error
					console.log("Cannot buy more than is in stock");
					res.end();
				}
			})			
		}
	}
})();