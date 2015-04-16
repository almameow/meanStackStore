// This is /server/models/product.js
// We want to create a file that has the schema for orders and creates a model that we can then call upon in our controller

var mongoose = require('mongoose');

// Create our ProductSchema
var ProductSchema = new mongoose.Schema({
	name: String,
	url: String,
	desc: String,
	quantity: Number
});

mongoose.model('Product', ProductSchema);