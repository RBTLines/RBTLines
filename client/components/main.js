import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
      <h1 className="title is-1 level-item hast-text-centered">BOILERMAKER</h1>
        <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fa fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
