import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Login, Signup, UserHome} from './components'
import Main from './components/main'
import {me} from './store'
import TweetSentiment from './components/tweetSentiment'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      tweets: []
    }
    this.getHandle = this.getHandle.bind(this)
  }

  componentDidMount () {
    this.props.loadInitialData()
  }

  getHandle (tweets) {
    this.setState({handle: tweets})
    console.log('this is the route.js file', this.state)
  }

  render () {

    const {isLoggedIn} = this.props
    //getHandle('get handle working')
    return (
      <Router history={history}>
          <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route exact path="/" render={() => <Main getHandle={this.getHandle.bind(this)} />} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/tweet_sentiment" render={() => <TweetSentiment twitterHandle={this.state.handle} />} />
              {/* Displays our Login component as a fallback */}
              <Route component={Login} />
          </Switch>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
