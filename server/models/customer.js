// This is /server/models/customer.js
// We want to create a file that has the schema for our customers and creates a model that we can then call upon in our controller

var mongoose = require('mongoose');

// Create our customerSchema
var CustomerSchema = new mongoose.Schema({
  name: String,
  date: {type:Date, default: Date.now}
});

// Use the schema to create the model
// Note that creating a model CREATES the collection in the db
// When the collection is created, it is automatically changed to lower-case and plural!!
mongoose.model('Customer', CustomerSchema);
// Notice that we aren't exporting anything. This is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller