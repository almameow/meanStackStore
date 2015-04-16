// This is /config/routes.js
var customers = require("./../server/controllers/customers.js");
var orders = require("./../server/controllers/orders.js");
var products = require("./../server/controllers/products.js");

module.exports = function(app){
	// Get Requests to pull all customers, orders, products from DB
	app.get("/customers", function(req, res){
		customers.show(req, res);
	});
	app.get("/orders", function(req, res){
		orders.orders(req, res);
	});
	app.get("/products", function(req, res){
		products.products(req, res);
	});


	// Receive post request via AJAX to /add
	// Direct request to the customers.add method
	app.post("/add", function(request, response){
		customers.add(request, response);
	});

	// Receive post request via AJAX to /delete
	// Direct request to customers.remove method
	app.post("/delete/:id", function(request, response){
		// I pass the entire request object to .delete, and select only the id variable from within the .delete() function (I could also pass only the id from here, but for some reason that seems to not be the way its done)
		customers.delete(request, response);
	});

	app.post("/order", function(request, response){
		orders.order(request, response);
	});

	app.post("/add_product", function(request, response){
		products.add(request, response);
	});
	
}