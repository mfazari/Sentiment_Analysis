
function senti_analyze(sentence) {

    var Sentiment = require('Sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);
    console.log(result.score);

}
