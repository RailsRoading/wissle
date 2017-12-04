import React from 'react'

class Geolocation extends React.Component {
  render() {
    return (
      <div>
        <div>Location: {this.props.latitude}, {this.props.longitude}</div>

        <a
          href="#"
          onClick={this.props.acquireLocation}
        >Refresh</a>
      </div>
    )
  }
}

export default Geolocation
