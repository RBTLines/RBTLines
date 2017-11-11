import React, { Component } from 'react';
import axios from 'axios';
import TweetAnalyzer from './tweetAnalyzer'
import {Circle} from 'better-react-spinkit'
import Main from './main'

export default class TweetSentiment extends Component {

    constructor (props) {
      super(props);
      this.state = {
        tweets: []
      };

    }


    componentDidMount () {
      const urlParam = window.location.href.split('/');
      axios.get(`/api/tweets/${urlParam[urlParam.length - 1]}`)
        .then(res => res.data)
        .then(tweets => {
          console.log('These are the tweets ', tweets);
          this.setState({tweets});
        });
    }


    render() {
      let tweetString = '';
      return (
          <div>
          <Main />
            <div className="columns">
            <div className="column is-6">
            {
              this.state.tweets.length ? <h3>{this.state.tweets[0].user.screen_name}</h3> : <Circle size={50} color="blue" />
            }
            {this.state.tweets && this.state.tweets.map( tweet =>
              {tweetString = tweetString + ' ' + tweet.text
              return (
                <article className="media" key={tweet.id}>
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src={tweet.user.profile_image_url} />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong></strong> <small>@{tweet.user.screen_name}</small> <small>{[tweet.created_at]}</small>
                      <br/>
                      {tweet.text}
                    </p>
                  </div>
                </div>
                </article>

              )}
            )

            }
            </div>
            <div className="column is-6">
              {
                this.state.tweets.length ? <TweetAnalyzer tweetString={tweetString} numTweets={this.state.tweets.length} /> : <Circle size={50} color="blue" />
              }
            </div>
          </div>
          </div>
        )
    }
    // render () {
    //   console.log("this is the twitter sentiment state ", this.state)
    //   return (
    //     <div className="columns">
    //       <div className="column is-6">
    //         <article className="media">
    //         <figure className="media-left">
    //           <p className="image is-64x64">
    //             <img src="https://bulma.io/images/placeholders/128x128.png"/>
    //           </p>
    //         </figure>
    //         <div className="media-content">
    //           <div className="content">
    //             <p>
    //               <strong></strong> <small>@johnsmith</small> <small>31m</small>
    //               <br/>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
    //             </p>
    //           </div>
    //           <nav className="level is-mobile">
    //             <div className="level-left">
    //               <a className="level-item">
    //                 <span className="icon is-small"><i className="fa fa-reply"></i></span>
    //               </a>
    //               <a className="level-item">
    //                 <span className="icon is-small"><i className="fa fa-retweet"></i></span>
    //               </a>
    //               <a className="level-item">
    //                 <span className="icon is-small"><i className="fa fa-heart"></i></span>
    //               </a>
    //             </div>
    //           </nav>
    //         </div>
    //         <div className="media-right">
    //           <button className="delete"></button>
    //         </div>
    //       </article>
    //       </div>
    //       <div className="column is-6">Auto</div>
    //     </div>
    //   );
    // }
  }
