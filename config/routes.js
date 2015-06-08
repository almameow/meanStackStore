// This is /config/routes.js
var customers = require("./../server/controllers/customers.js");
var orders = require("./../server/controllers/orders.js");
var products = require("./../server/controllers/products.js");

module.exports = function(app){
	// Get Requests to pull all customers, orders, products from DB
	app.get("/customers", function(request, response){
		customers.show(request, response);
	});
	app.get("/orders", function(request, response){
		orders.orders(request, response);
	});
	app.get("/products", function(request, response){
		products.products(request, response);
	});


	// Post requests to add new customers, orders, products to DB
	app.post("/add_customer", function(request, response){
		customers.add(request, response);
	});
	app.post("/order", function(request, response){
		orders.order(request, response);
	});
	app.post("/add_product", function(request, response){
		products.add(request, response);
	});


	// Post requests to remove customers, orders, products from DB
	app.post("/delete/:id", function(request, response){
		customers.delete(request, response);
	});
	app.post("/remove_order/:id", function(request, response){
		orders.remove(request, response);
	});
	app.post('/remove_product', function(request, response) {
		products.remove(request, response);
	});

	// Show specific product
	app.post('/get_product/:id', function(request, response){
		products.getOneProduct(request, response);
	});
}