// This is /server/models/topic.js
// We want to create a file that has the schema for topics and creates a model that we can then call upon in our controller

var mongoose = require('mongoose');

// Create our OrderSchema
var TopicSchema = new mongoose.Schema({
	title: String,
	description: String,
	category: String,
	date: {type:Date, default: Date.now}
});

mongoose.model('Topic', TopicSchema);