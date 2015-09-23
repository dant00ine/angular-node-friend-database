friends_app.factory('FriendFactory', function($http){

	// var friends = [];
	var factory = {};

	factory.getFriends = function(callback){
		$http.get('/friends').success(function(output){
			callback(output);
		})
	}

	factory.addFriend = function(info, callback){
		console.log('in favtory', info);
		$http.post('/friends', info).then(function(response){
			console.log('angular factory for add friend reached');
			callback(response);
		})

	}

	return factory
});