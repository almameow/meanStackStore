// This is /server/controllers/customers.js

// Require mongoose and Customer model
var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = (function(){
	return{
		// pull all customers from DB
		show: function(req, res){
			Customer.find({}, function(error, results){
				if(error){
					console.log(error);
				} else {
					res.json(results);
				}
			})
		},

		// Add new customers to db
		add: function(req, res) {
			// Create new model
			var newCustomer = new Customer(req.body);
			console.log(req.body);
			if( req.body.name === undefined || req.body.name == ""){
				res.send("Error: Name field must be completed.");
				console.log("Error: Name field must be completed.")
			}
			else{
				// If customer with same name as user input already exists in db, do not add to db
				Customer.findOne({name: req.body.name}, function(error, response){ 
					if(response){ //customer exists
						console.log("Customer already exists in db");
						res.send("Error: A customer with this name already exists.");
					}
					else{
						// Call .save function
						newCustomer.save(function(error, results){
							if(error){
								console.log("Did not save new customer to db");
							} else {
								console.log("Successfully saved new customer to db");
								res.json(results);
							}
						});
					}
				})
			}
		},

		// Remove customer from db
		delete: function(req, res) {
			console.log("customers.js _id value: " , req.params.id);
			Customer.remove({_id: req.params.id}, function(error, results){
				if(error){
					console.log("Error removing this customer");
				} else {
					console.log("Successfully removed customer");
					res.json(results);
				}
			}) 
		},
	}
})();