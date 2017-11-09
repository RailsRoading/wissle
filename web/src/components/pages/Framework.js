import React, { Component } from 'react'
import { Button } from 'react-foundation'

import { Link } from 'react-router-dom'

export default class Framework extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
