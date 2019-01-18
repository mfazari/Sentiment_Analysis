//our basic sentiment-analyzer
let sentiment = require('sentiment');


//function retrieves sentiment-score
module.exports = function analyze(sentence) {
    var result_object = 0;
    var score = 0;
    var sent = new sentiment();
    var length = sentence.length;
    for(var i = 0; i < length; i++) {
        result_object = sent.analyze(sentence[i]);
    }
    score = result_object.score / length;
    console.log(score);
    return score;
};



/*
module.exports = function analyze(sentence) {





 return result;
};

*/
