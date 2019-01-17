//our basic sentiment-analyzer
var Senti = require('Senti');


//function retrieves sentiment-score
export function senti_analyze(sentence) {
    var sentiment = new Senti();
    var result = sentiment.analyze(sentence);
    console.log(result.score);

    return result
}


//calculates total score
export function score(tweet){
    let total;
    total = total + senti_analyze(tweet);

    return total

}
