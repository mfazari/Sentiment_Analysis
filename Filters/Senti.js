//our basic sentiment-analyzer
let sentiment = require('sentiment');


//function retrieves sentiment-score
module.exports = function analyze(sentences) {
    var result_object = 0;
    var score = 0;

    //instantiate our sentiment function
    var sent = new sentiment();
    var length = sentences.length;
    for(var i = 0; i < length; i++) {
        result_object = sent.analyze(sentences[i]);
    }
    score = result_object.score / length;
    return score;
};



/*
module.exports = function analyze(sentence) {





 return result;
};

*/
