import React, { Component } from 'react';
import axios from 'axios';

export default class TweetSentiment extends Component {

    constructor (props) {
      super(props);
      this.state = {
        tweets: []
      };

    }

    // componentDidMount () {
    //   axios.get('/api/songs')
    //     .then(res => res.data)
    //     .then(songs => {
    //       this.setState({ songs });
    //     });
    // }


    render () {
      return (
        <div >
          <h1>Our render test</h1>
        </div>
      );
    }
  }
