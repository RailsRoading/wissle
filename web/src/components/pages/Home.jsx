import React, {Component} from 'react'
import {Icon, Menu, MenuItem} from 'react-foundation'
import MyMapComponent from 'components/MyMapComponent'
{/* import {Link} from 'react-router-dom' */}

export default class Home extends Component {
  render() {
    return (<div className="grid-x grid-home align-middle">
      <div className="small-12 medium-12 large-12 cell text-center">
        <div className="hamburgerBars">
          <Menu>
            <MenuItem>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <MyMapComponent isMarkerShown="isMarkerShown" googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style = {{ height: `100%` }}/>} containerElement={<div style = {{ height: `100vh` }}/>} mapElement={<div style = {{ height: `100%` }}/>}/>
        </div>
        {/* Add these to the Hamburger Menu!
        <Link to="/details">
          <Button>Details</Button>
        </Link>
        <Link to="/user">
          <Button>User</Button>
        </Link>
        */
        }
      </div>
    </div>);
  }
}
