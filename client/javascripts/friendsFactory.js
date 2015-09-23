friends_app.factory('FriendFactory', function($http){

	// var friends = [];
	var factory = {};

	factory.getFriends = function(callback){
		$http.get('/friends').success(function(output){
			console.log('reached friend factory get');
			callback(output);
		})
	}

	factory.addFriend = function(info, callback){
		$http.post('/friends', info).success(function(response){
			console.log('angular factory for add friend reached', response);
			if(response.success){
				console.log("response was a success in factory")

				callback(response);
				
			} else {
				console.log("response was a FAILURE from factory")
				console.log("errors:", response.message)

				callback(response);
			}
		})

	}

	return factory
});