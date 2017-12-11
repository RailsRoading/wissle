import React, { Component } from 'react'
import { Button } from 'react-foundation'

import Protected from 'components/Protected'
import MyMapComponent from 'components/MyMapComponent'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <Protected>
        <div className="pageDiv">
          <img src="WissleLogo.JPG" alt="Wissle logo" className="WissleLogo"/>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <Link to="/details"><Button>Details</Button></Link>
          <Link to="/user"><Button>User</Button></Link>
          <Link to="/wissle"><Button>Wissle</Button></Link>
          <Link to="/tag"><Button>Tag</Button></Link>
        </div>
      </Protected>
    )
  }
}
