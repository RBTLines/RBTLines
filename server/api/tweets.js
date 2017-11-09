const router = require('express').Router();
const Twitter = require('twitter-node-client').Twitter;
const config = require('../../secrets');

const twitter = new Twitter(config);

module.exports = router;

router.get('/', (req, res, next) => {
  const error = (err, res, body) => {
    console.log(err);
  }

  const success = (data) => {
    res.json(JSON.parse(data))
  }

  twitter.getUserTimeline({screen_name: 'realDonaldTrump', count: '25'}, error, success)
})
