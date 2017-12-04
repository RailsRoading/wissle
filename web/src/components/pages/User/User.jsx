import React, { Component } from 'react';
import { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/ActionCreators';

class User extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: { username: "", age: "" }
        };

        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onUserAgeChange = this.onUserAgeChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onUserNameChange(event) {
        const user = this.state.user;
        user.username = event.target.value;
        this.setState({ user: user });
    }

    onUserAgeChange(event) {
        const user = this.state.user;
        user.age = event.target.value;
        this.setState({ user: user });
    }

    onClickSave() {
        this.props.actions.saveUser(this.state.user);
    }

    userRow(user, index) {
        return <div key={index}>{user.username}---{user.age}</div>
    }

    render() {
        return (
            <div>
                <h1>User</h1>

                {this.props.user.map(this.userRow)}

                <h2>Add User</h2>

                <input
                    type="text"
                    onChange={this.onUserNameChange}
                    value={this.state.user.username} />

                <input
                    type="number"
                    onChange={this.onUserAgeChange}
                    value={this.state.user.age} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />

            </div>
        );
    }
}

/*User.propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.array.isRequired
};*/

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);