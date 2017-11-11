import React from 'react';


const sentiment = require('sentiment');
const fleschKincaid = require('flesch-kincaid');
const syllable = require('syllable');

const TweetAnalyzer  = (props) => {
  //sentiment(props.analyzer.score
  console.log(props.numTweets);
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

  console.log('wordCount: ', wordCount, 'syllableCount', syllableCount, 'sentenceCount', sentenceCount, 'incoming text', props.tweetString);

  console.log('!!!!!!!!!!!!!!!!', analysis.tokens)

  return (
    <div className= "container">

      {`${emotion} rating: ${comparative}`}
      <br />
      {`comp rating: ${analysis.comparative}`}
      <br />
      {`pos words: ${analysis.positive}`}
      <br />
      {`neg words: ${analysis.negative}`}
      <br />
      {`grade level: ${gradeLevel}`}

    </div>
  )
}

export default  TweetAnalyzer;
