const router = require('express').Router();
const Twitter = require('twitter-node-client').Twitter;
const config = require('../../secrets');

const twitter = new Twitter(config);

module.exports = router;

router.get('/:twitterHandle', (req, res, next) => {
  const twitterHandle = req.params.twitterHandle;
  console.log('this is the value of twitterHandle on the get request ', twitterHandle)
  const error = (err, res, body) => {
    console.log(err);
  }

  const success = (data) => {
    res.json(JSON.parse(data))
  }

  twitter.getUserTimeline({screen_name: twitterHandle, count: '100'}, error, success)
})
