//our basic sentiment-analyzer
var sentiment = require('sentiment');


//function retrieves sentiment-score
module.exports = function senti_analyze(sentence) {
    var sentiment = new sentiment();
    var result = sentiment.analyze(sentence);
    console.log(result.score);

    return result
};


//calculates total score
module.exports = function score(tweet){
    let total;
    total = total + senti_analyze(tweet);

    return total
};
