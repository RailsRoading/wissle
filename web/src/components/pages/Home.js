import React, { Component } from 'react'
import { Button } from 'react-foundation'
import MyMapComponent from 'components/MyMapComponent'
import '../../index.css'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src="WissleLogo.JPG" alt="Wissle logo"/>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      {/*<Link to="/details"><Button>Details</Button></Link>*/}
      </div>
    );
  }
}
