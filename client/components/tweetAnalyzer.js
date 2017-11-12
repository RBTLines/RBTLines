import React from 'react';


const sentiment = require('sentiment');
const fleschKincaid = require('flesch-kincaid');
const syllable = require('syllable');

const TweetAnalyzer  = (props) => {
  //sentiment(props.analyzer.score
  const analysis = sentiment(props.tweetString);
  const comparative = Math.floor(analysis.comparative * 1000);
  let emotion = '';
  switch (true) {
    case comparative > 100:
      emotion = 'Dalai Lama!!!';
      break;
    case (comparative <= 100 && comparative > 70):
      emotion = 'Rose-Colored Glasses';
      break;
    case (comparative <= 70 && comparative > 50):
      emotion = 'The Sky\'s the Limit';
      break;
    case (comparative <= 50 && comparative > 30):
      emotion = 'The Glass is Half Full';
      break;
    case (comparative <= 30 && comparative > 10):
      emotion = 'Things are Looking Up';
      break;
    case (comparative <= 10 && comparative > 0):
      emotion = 'Meh';
      break;
    case (comparative <= 0 && comparative > -20):
      emotion = 'Debbie Downer';
      break;
    default:
      emotion = 'WOW! Way too much Haterade!'
  }

  const wordCount = analysis.tokens.length;
  const syllableCount = syllable(props.tweetString);
  const sentenceCount = props.numTweets;
  const gradeLevel = Math.floor(fleschKincaid({
    sentence: sentenceCount,
    word: wordCount,
    syllable: syllableCount
  }))


  return (
    <div className= "container">
      <br />
      {`Sentiment Scale Rating ====> [${comparative}].......${emotion}`}
      <br />
      <br />
      {`Positive words ====> ${analysis.positive.join(', ').trim()}`}
      <br />
      <br />
      {`Negative words ====> ${analysis.negative.join(', ').trim()}`}
      <br />
      <br />
      {`Relative Tweeting Grade Level ====> ${gradeLevel}`}
      <br />
      <br />
      <h3>Most Recent Tweets: </h3>
    </div>
  )
}

export default  TweetAnalyzer;
