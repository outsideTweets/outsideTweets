var app = require('express')();
var tweetHandler = require('./tweetHandler.js');

var twit = require('twit');
var wit = require('./wit.js');

var consumer_key = require('./secrets.js').consumer_key;
var consumer_secret = require('./secrets.js').consumer_secret;
var access_token = require('./secrets.js').access_token_key;
var access_token_secret = require('./secrets.js').access_token_secret;

var t = new twit({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token: access_token,
  access_token_secret: access_token_secret
});

var port = process.env.port || 3000;

var server = app.listen(port, function() {
  console.log('listening on port 3000');
})
 
tweetHandler.getMentions();

