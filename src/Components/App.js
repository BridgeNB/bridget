import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Footer from './General/Footer';
import Header from './General/Header';
import CategoryList from './CategoryList';
import PostDetail from './PostDetail';
import RegistrationPage from './Auth/RegistrationPage';
import LoginPage from './Auth/LoginPage';
import { CreatePostPage } from './Post/CreatePostPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact component={ CategoryList } />      
            <Route path="/api/auth/register" exact component={ RegistrationPage } />
            <Route path="/api/auth/login" exact component={ LoginPage } />
            <Route path="/api/post/create" exact component={ CreatePostPage } />
            <Route path="/:category/:postId" exact component={ PostDetail }/>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
