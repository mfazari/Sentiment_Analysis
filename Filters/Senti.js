//our basic sentiment-analyzer
let sentiment = require('sentiment');


//function retrieves sentiment-score
module.exports = function analyze(sentences) {
    var result_object = 0;
    var result_score = 0;
    var length = sentences.length;

    //Put all the sentences in one massive String
    var joint = sentences.join();

    //instantiate our sentiment function
    var sent = new sentiment();

    //... and use it with out String full of Tweets
    result_object = sent.analyze(joint);

    //Filter out the score
    result_score = result_object.score / length;

    //... and return the result
    return result_score;
};
