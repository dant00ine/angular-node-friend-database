
friends_app.controller('FriendsController', function($scope, FriendFactory){
	FriendFactory.getFriends(function(data){
		console.log('initial get all friends');
		$scope.friends = data;
	});

	$scope.addfriend = function(){
		FriendFactory.addFriend($scope.new_friend, function(response){
			console.log(response, "from addfriend, in callback")
			if(response.success){
				FriendFactory.getFriends(function(get_friends){
					$scope.friends = get_friends;
				})
			} else {
				$scope.errors = response.message;
				console.log("errors",$scope.errors);
				FriendFactory.getFriends(function(get_friends){
					$scope.friends = get_friends;
				})
			}
		});
	}
})