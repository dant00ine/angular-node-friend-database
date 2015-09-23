var mongoose = require('mongoose');
//create our friendSchema
var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
});

mongoose.model('Friend', FriendSchema);