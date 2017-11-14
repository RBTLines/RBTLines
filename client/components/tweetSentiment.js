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
          <div className="container">
          <Main />
            {
              this.state.tweets.length ?
                <div className="has-text-centered">
                  <img className="user-image" src={this.state.tweets[0].user.profile_image_url} />
                  <h3 className="is-size-1" >{this.state.tweets[0].user.name}</h3>
                  <h2 className="is-size-6">`"{this.state.tweets[0].user.description}"`</h2>
                </div>
                : <div className="loader"><Circle size={50} color="blue" /></div>
            }
            {this.state.tweets && this.state.tweets.map( tweet =>
              {tweetString = tweetString + ' ' + tweet.text}
            )}
            {
              this.state.tweets.length ? <TweetAnalyzer tweetString={tweetString} numTweets={this.state.tweets.length} /> : null
            }
            {this.state.tweets && this.state.tweets.map( tweet =>
              (<article className="media" key={tweet.id}>
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
              )
            )

            }
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
