var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
});

mongoose.model('Friend', FriendSchema);

FriendSchema.path('name').required(true, 'User name cannot be blank');
FriendSchema.path('age').required(true, 'User age cannot be blank');