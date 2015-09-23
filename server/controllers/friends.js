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
			
			newfriend = new Friend(req.body);
			newfriend.save(function(err, results){
				console.log('results')
				console.log(results);
				// console.log(err);
				if(err){
					console.log('error triggered')
					error_messages =[];

					if(err.errors.age.properties.message){
						console.log('age')
						error_messages.push(err.errors.age.properties.message);
					}

					if(err.errors.name.properties.message){
						console.log('name')
						error_messages.push(err.errors.name.properties.message);
					}
					
					console.log("multiple messages?", error_messages);
					res.json({success: false, message: error_messages});
					// res.redirect('/');
				} else {
					console.log('no error')
					res.json({success: true, message: results});
				}
			})
		}
	}
})();