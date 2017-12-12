import { connect } from 'react-redux'
import React, { Component } from 'react'

function mapStateToProps(state) {
  return {
    error: state.app.api.error,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

/**
 * Displays an alert if there was an API error
 */
class Alert extends Component {
  render() {
    if (!this.props.error)
      return ''

    return (
      <div className="callout alert">
        <strong>An error occurred:</strong> {this.props.error}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert)
