import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

/**
 * Wrap this component around the pages that require a profile to be present
 */
class Protected extends Component {
  render() {
    if (!!this.props.user && !!this.props.user.uuid) {
      // If a profile already exists, render the page
      return this.props.children
    } else {
      // Otherwise, redirect to create profile page
      return (
        <Redirect to={this.props.target || '/user'} />
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Protected)
