import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';
import { login } from '../../Actions/auth';

export class LoginPage extends Component {
    login = values => {
        return this.props.dispatch(login(values.username, values.password));
        // this.props.dispatch(createUserAction(values)).then(() => { this.props.history.push("/login") })
    }
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <div className="home">
                <h2>Welcome to Bridget forum</h2>
                <LoginForm onSubmit={this.login} />
                <Link to="/api/auth/register">Register</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);