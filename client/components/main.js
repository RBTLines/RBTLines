import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from './navbar'
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
      <div>

          <div className="field">
          <label className="label">Enter a Twitter handle to analyze:</label>
          <div className="control has-icons-left has-icons-right">
            <input onChange={this.handleChange} className="input is-success" type="text" placeholder="Text input" value={this.inputValue} />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </div>
          <Link to={`/tweet_sentiment/${this.state.inputValue}`} className="button is-info" onClick={() => this.props.getHandle(this.state.inputValue)}>Submit</Link>
        </div>
        <Navbar />
      </div>
    )
  }
}
