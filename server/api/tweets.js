const router = require('express').Router();
const Twitter = require('twitter-node-client').Twitter;

const config = {
  consumerKey: '5YSpaAYbEdibnc5WAHsz9IcNL',
  consumerSecret:  'd2qT9b9KMs6eRoldregLoPNel0AQNKuXkEEfUJkRh8g4jLwBjM',
  accessToken: '583897464-m55CjcyWHYy7iqA1htxl4Z6id86TRPPpgXrzLs8z',
  accessTokenSecret: 'PnbQoHTrhUnLmEil6iGnYB6B6Bqzqqz3O8as22EyMDZT6',
}

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
