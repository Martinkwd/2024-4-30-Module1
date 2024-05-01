function PrintSentiment(sentencePassed)
{
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze(sentencePassed);
    return result.score;
}
//PrintLineOnConlose

console.log(PrintSentiment("Dogs are great"))

