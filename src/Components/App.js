import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryList from './CategoryList';
import PostDetail from './PostDetail';
import RegistrationPage from './Auth/RegistrationPage';
import LoginPage from './Auth/LoginPage';

import { clearAuth } from '../Actions/auth';
import { deleteAuthenticatedUserFromLocalStorage } from '../local-storage';

class App extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    deleteAuthenticatedUserFromLocalStorage();
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <header>Welcome to Bridget Forum </header>
          <div className="nav-btns">
            <Link to={"/api/auth/login"}><button>Log In</button></Link>
            <Link to={"/api/auth/register"}><button>Sign Up</button></Link>
            <button onClick={() => this.logOut()}>Log Out</button>
          </div>
        </div>
        <main className="main">
          <Switch>
            <Route path="/" exact component={ CategoryList } />      
            <Route path="/api/auth/register" exact component={ RegistrationPage } />
            <Route path="/api/auth/login" exact component={ LoginPage } />
            <Route path="/:category/:postId" exact component={ PostDetail }/>
          </Switch>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthTokne: state.auth.authToken !== null,
  loggedIn:     state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
