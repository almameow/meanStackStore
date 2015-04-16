// This is /server/controllers/topics.js

// Require mongoose and Topics model
var mongoose = require("mongoose");
var Topic = mongoose.model("Topic");

module.exports = (function(){
	return{
		// pull all topics from DB
		topics: function(req, res){
			Topic.find({}, function(error, results){
				if(error){
					console.log(error);
				} else {
					res.json(results);
				}
			})
		}
	}
})();