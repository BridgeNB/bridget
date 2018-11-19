import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryList from './CategoryList';
import PostDetail from './PostDetail';
import RegistrationPage from './Auth/RegistrationPage';
import LoginPage from './Auth/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <header>Welcome to Bridget Forum </header>
          <div className="nav-btns">
            <Link to={"/api/auth/login"}><button>Log In</button></Link>
            <Link to={"/api/auth/register"}><button>Sign Up</button></Link>
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

export default App;