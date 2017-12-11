import React, {Component} from 'react'
import {Icon, Menu, MenuItem} from 'react-foundation'
import MyMapComponent from 'components/MyMapComponent'

export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.openMenu = this.openMenu.bind(this)
    this.state = {
      openMenu: false
    }
  }
  openMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }
  render() {
    return (<div className="grid-x grid-home align-middle">
      <div className="small-12 medium-12 large-12 cell text-center">
        <div className="hamburger">
          <nav role="navigation">
            <ul id="hamburgerMenu" className={`hamburgerMenu ${this.state.openMenu ? 'is-open': ""}`}>
              <li>
                <a href="interests">Tags</a>
              </li>
              <li>
                <a href="wissles">Wissles</a>
              </li>
              <li>
                <a href="user">User</a>
              </li>
              <li>
                <a href="help">Help</a>
              </li>
            </ul>
            <a data-toggle-menu="data-toggle-menu" className="hamburgerMenu-toggle" href="#hamburgerMenu" onClick={this.openMenu}>
              <i className="fa fa-bars"></i>
              {/* <i className="fa fa-plus"></i> */}
            </a>
          </nav>
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
