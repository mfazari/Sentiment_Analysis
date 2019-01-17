var login_data = require('./Twitter_Login');

var Twit = require('twit');


//New Bot using Twitter credentials from Twitter_Login.js
const Bot = new Twit({
    consumer_key: login_data.TWITTER_CONSUMER_KEY,
    consumer_secret: login_data.TWITTER_CONSUMER_SECRET,
    access_token: login_data.TWITTER_ACCESS_TOKEN,
    access_token_secret: login_data.TWITTER_ACCESS_TOKEN_SECRET
});

var options = { screen_name: 'realDonaldTrump',
    count: 3 };


Bot.get('statuses/user_timeline', options , function(err, data) {
    for (var i = 0; i < data.length ; i++) {
        console.log(data[i].text);
    }
});
