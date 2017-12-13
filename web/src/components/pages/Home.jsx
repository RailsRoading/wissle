import React, {Component} from 'react'
import {Icon, Menu, MenuItem} from 'react-foundation'
import MyMapComponent from 'components/MyMapComponent'

export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.openMenu = this.openMenu.bind(this)
    this.toggleUserEdit = this.toggleUserEdit.bind(this)
    this.state = {
      openMenu: false,
      userEdit: false
    }
  }
  openMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }
  toggleUserEdit() {
    this.setState({
      userEdit: !this.state.userEdit
    })
  }

  render() {
    return (<div className="grid-x grid-home align-middle">
      <div className="small-12 medium-12 large-12 cell text-center">
        <div className="hamburger">
          <div className="grid-x grid-hamburger align-middle">
            <nav role="navigation">
              <ul id="hamburgerMenu" className={`hamburgerMenu ${this.state.openMenu
                  ? 'is-open'
                  : ""}`}>
                <div className="menuHeader">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  <div className="userBox">
                    <input className="userNameBox" type="flexbox" placeholder="Username"/>
                    <input className="userAgeBox" type="flexbox" placeholder="Age"/>
                    <a className="editPencil" onClick={this.toggleUserEdit}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="menuBody">
                  <li>
                    <a href="interests">Tags</a>
                  </li>
                  <li>
                    <a href="wissles">Wissles</a>
                  </li>
                  <li>
                    {/* remove this when launching! */}
                    <a href="user">User</a>
                  </li>
                </div>
                <div className="menuFooter">
                  <li>
                    <a href="help">Help</a>
                  </li>
                </div>
              </ul>
              <a data-toggle-menu="data-toggle-menu" className="hamburgerMenu-toggle" onClick={this.openMenu}>
                <i className="fa fa-bars"></i>
                {/* <i className="fa fa-plus"></i> */}
              </a>
            </nav>
          </div>
        </div>

        <div>
          <MyMapComponent isMarkerShown="isMarkerShown" googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style = {{ height: `100%` }}/>} containerElement={<div style = {{ height: `100vh` }}/>} mapElement={<div style = {{ height: `100%` }}/>}/>
        </div>
      </div>
    </div>);
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      username: 'Username',
      age: 'Age'
    }
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  render() {
    var editing = this.state.edit;
    var username = this.state.username;
    var age = this.state.age;

    if (editing) {
      return (<div>
        <input className="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <input className="age" type="text" placeholder="Age" value={this.state.age} onChange={this.handleAgeChange}></input>
        <p onClick={() => this.handleClick()}>X</p>
      </div>);
    }
    return (<div>
      <p>{username}, {age}
        <span onClick={() => this.handleClick()}>X</span>
      </p>
    </div>);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleAgeChange(e) {
    this.setState({age: e.target.value});
  }

  handleClick() {
    this.setState({
      edit: !this.state.edit
    });
  }
}
