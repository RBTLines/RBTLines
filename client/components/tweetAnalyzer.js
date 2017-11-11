import React from 'react';
const sentiment = require('sentiment');

const TweetAnalyzer  = (props) => {
  //sentiment(props.analyzer.score)
  const analysis = sentiment(props.analyzer);
  let grade = '';
  if (analysis.score > 0) {
    grade = 'positive'
  } else {
    grade = 'negative'
  }
  return (
    <div>
      {`${grade} positivity rating: ${analysis.tokens}`}
    </div>
  )
}

export default  TweetAnalyzer;
