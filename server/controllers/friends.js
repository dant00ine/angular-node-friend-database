var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
	return {
		show: function(req, res){
			console.log('reached the frieds controllers show method');
			Friend.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		add: function(req, res){
			console.log('server controller add function reached');
			console.log(req.body);

			newfriend = new Friend(req.body);
			newfriend.save(function(err, results){
				console.log('results')
				console.log(results);
				if(err){
					error_messages =[];
					error_messages.push(err.errors.age.properties.message);
					error_messages.push(err.errors.name.properties.message);
					console.log("multiple messages?", error_messages);
					res.json({success: false, message: error_messages});
					// res.redirect('/');
				} else {
					res.json({success: true, message: results});
				}
			})
		}
	}
})();