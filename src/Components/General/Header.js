import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearAuth } from '../../Actions/auth';
import { deleteAuthenticatedUserFromLocalStorage } from '../../local-storage';

export class Header extends Component {
    logOut() {
        this.props.dispatch(clearAuth());
        deleteAuthenticatedUserFromLocalStorage();
    }
    render() {
        const DefaultHeader = !this.props.loggedIn ? (
            <React.Fragment>
              <div className="nav-btns">
                <header>Welcome to Bridget Forum </header>
                <Link to={"/api/auth/login"}><button>Log In</button></Link>
                <Link to={"/api/auth/register"}><button>Sign Up</button></Link>
              </div>
            </React.Fragment>
          ) : null;
          const LoggedInHeader = this.props.loggedIn ? (
            <div className="nav-btns">
              <header>Welcome to Bridget Forum </header>
              <button onClick={() => this.logOut()}>Log Out</button>
            </div>
          ) : null;
        return (
            <div className="header">
                {DefaultHeader}
                {LoggedInHeader}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthTokne: state.auth.authToken !== null,
    loggedIn:     state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);