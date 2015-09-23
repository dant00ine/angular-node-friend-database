friends_app.controller('FriendsController', function($scope, FriendFactory){

	FriendFactory.getFriends(function(data){
		$scope.friends = data;
	});

	$scope.addfriend = function(){
		FriendFactory.addFriend($scope.new_friend, function(){
			$scope.friends = FriendFactory.getFriends();
			$scope.new_friend = {};
		});
	}
})