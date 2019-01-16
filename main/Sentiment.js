var Sentiment = require('Sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze("You are an asshole");
console.log(result.score);
