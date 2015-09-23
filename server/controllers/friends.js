var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
	return {
		show: function(req, res){
			Friend.find({}, function(err, results){
				console.log(results);
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
		}
	}
})();