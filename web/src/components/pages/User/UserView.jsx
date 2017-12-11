import React, { Component } from 'react'
import { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Protected from 'components/Protected'

import './User.css'

export default class UserView extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      user: { username: "", age: "" }
    }

    this.onUserNameChange = this.onUserNameChange.bind(this)
    this.onUserAgeChange = this.onUserAgeChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
    this.onClickTags = this.onClickTags.bind(this)
  }

  onUserNameChange(event) {
    const user = this.state.user
    user.username = event.target.value
    this.setState({ user: user })
  }

  onUserAgeChange(event) {
    const user = this.state.user
    user.age = event.target.value
    this.setState({ user: user })
  }

  onClickSave() {
    this.props.actions.saveUser(this.state.user)
  }

  onClickTags() {
    this.props.actions.getTags()
  }

  render() {
    return (
      <Protected inverse target="/">
        <div className="grid-x grid-padding-x grid-user align-middle">
          <div className="small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offset-4 cell text-center">
            <div className="logo padding-3 margin-top-2 text-center">Wissle</div>
          </div>
          <div className="small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offset-4 cell">
            <input
              type="text"
              onChange={this.onUserNameChange}
              placeholder="Username"
              value={this.state.user.username} />
            <input
              type="number"
              onChange={this.onUserAgeChange}
              placeholder="Age"
              value={this.state.user.age} />
          </div>
          <div className="small-12 medium-8 medium-offset-1 large-4 large-offset-4 cell text-center">
            <small>By creating a profile you agree to the <Link to="/tos">Terms of Service</Link></small>
            <input
              type="submit"
              value="Create profile"
              className="button expanded"
              onClick={this.onClickSave} />
            <input
              type="button"
              value="Get tags"
              className="button expanded"
              onClick={this.onClickTags} />
          </div>
        </div>
      </Protected>
    )
  }
}
