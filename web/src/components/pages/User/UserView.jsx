import React, { Component } from 'react'
import { PropTypes } from 'react'

export default class UserView extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      user: { username: "", age: "" }
    }

    this.onUserNameChange = this.onUserNameChange.bind(this)
    this.onUserAgeChange = this.onUserAgeChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
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
  render() {
    return (
      <div>
        <h2>Add User</h2>
        <input
          type="text"
          onChange={this.onUserNameChange}
          value={this.state.user.username} />

        <input
          type="number"
          onChange={this.onUserAgeChange}
          value={this.state.user.age} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    )
  }
}
