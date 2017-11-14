import React, { Component } from 'react'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
  }

  render(){
    return (
      <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="title is-1 level-item">Read Between the Lines</h1>
        <div className="field has-addons is-grouped">
          <div className="control has-icons-left has-icons-right">
            <input onChange={this.handleChange} className="input is-medium" type="text" placeholder="Enter a Twitter handle" value={this.inputValue} />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </div>
          <div className="control">
          <Link to={`/tweet_sentiment/${this.state.inputValue}`} className="button is-info " >Submit</Link>
          </div>
        </div>
      </div>
      </nav>
      </div>
    )
  }
}
