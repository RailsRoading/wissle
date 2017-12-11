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
  constructor() {
    super()

    this.renderPage = this.renderPage.bind(this)
    this.redirectPage = this.redirectPage.bind(this)
  }

  renderPage() {
    return this.props.children
  }

  redirectPage() {
    return <Redirect to={this.props.target || '/user'} />
  }

  render() {
    if (!!this.props.user && !!this.props.user.uuid) {
      // If a profile already exists, execute the success action (redirect if inverse, otherwise render)
      return (this.props.inverse ? this.redirectPage() : this.renderPage())
    } else {
      // Otherwise, execute the failure action (render if inverse, otherwise redirect)
      return (this.props.inverse ? this.renderPage() : this.redirectPage())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Protected)
