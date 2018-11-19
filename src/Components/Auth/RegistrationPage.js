import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import { registerUser } from '../../Actions/users';
import { login } from '../../Actions/auth';

import RegistrationForm from './RegistrationForm';

export class RegistrationPage extends Component {
    signin = values => {
        const { name, email, username, password } = values;
        const user = { name, email, username, password};
        return this.props
                .dispatch(registerUser(user))
                .then(() => this.props.dispatch(login(username, password)));
    }
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <div className="home">
                <h2>Register for Bridget</h2>
                <RegistrationForm onSubmit={this.signin} />
                <Link to="/api/auth/login">Login</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    LoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);