// This is /server/models/order.js

var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	date: {type:Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);