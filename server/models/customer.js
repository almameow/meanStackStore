// This is /server/models/customer.js

var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  date: {type:Date, default: Date.now}
});

mongoose.model('Customer', CustomerSchema);