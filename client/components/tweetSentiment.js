import React, { Component } from 'react';
import axios from 'axios';

export default class TweetSentiment extends Component {

    constructor (props) {
      super(props);
      this.state = {
        tweets: []
      };

    }

    componentDidMount () {
      axios.get(`/api/tweets/${this.props.twitterHandle}`)
        .then(res => res.data)
        .then(tweets => {
          console.log(tweets);
          //this.setState(tweets);
        });
    }


    render () {
      console.log("this is the twitter sentiment component ", this.props)
      return (
        <div >
          <h1>Our render test</h1>
        </div>
      );
    }
  }
