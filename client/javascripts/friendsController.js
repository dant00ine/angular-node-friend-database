
friends_app.controller('FriendsController', function($scope, FriendFactory){
	var that = this;

	$scope.banana = {"hello":"hello"};
	FriendFactory.getFriends(function(data){
		console.log('initial get all friends');
		that.friends = data;
	});
//that = this either is usable
	that.addfriend = function(){
		FriendFactory.addFriend(that.new_friend, function(response){
			console.log(response, "from addfriend, in callback")
			if(response.success){
				FriendFactory.getFriends(function(get_friends){
					that.friends = get_friends; // that != original this is necessary
				})
			} else {
				that.errors = response.message;
				console.log("errors",that.errors);
				FriendFactory.getFriends(function(get_friends){
					that.friends = get_friends;
				})
			}
		});
	}
	console.log(this);
	//console.log(friends_app);
})// that added, $scope converted to that throughout after the var that = this variable set.
