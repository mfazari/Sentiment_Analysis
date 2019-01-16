
//Login Data for Twitter is saved in there, not available on Github
var login_data = require('./Twitter_Login');

var Twit = require('twit');


//New Bot
const Bot = new Twit({
    consumer_key: login_data.TWITTER_CONSUMER_KEY,
    consumer_secret: login_data.TWITTER_CONSUMER_SECRET,
    access_token: login_data.TWITTER_ACCESS_TOKEN,
    access_token_secret: login_data.TWITTER_ACCESS_TOKEN_SECRET
});


var stream = Bot.stream('statuses/filter', {track: 'Trump'});



stream.on('tweet', function(tweet) {

    console.log(tweet.text)

});




