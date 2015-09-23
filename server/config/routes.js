var friends = require('../controllers/friends.js');

module.exports = function(app) {
    app.get('/friends', function(req, res) {
    	console.log('here the body');
      friends.show(req, res);
    });

    app.post('/friends', function(req, res){
    	console.log('serverside routes');
    	console.log(req.body);
    	// console.log(req.params);
    	
    	friends.add(req, res);
    });
  }