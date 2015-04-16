// This is /server/models/order.js
// We want to create a file that has the schema for orders and creates a model that we can then call upon in our controller

var mongoose = require('mongoose');

// Create our OrderSchema
var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	date: {type:Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);