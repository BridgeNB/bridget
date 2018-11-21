
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FakePosts from '../Data/FakePosts';

import SinglePost from './SinglePost';


class CategoryList extends Component {

  static propTypes = {
    posts: PropTypes.array
  }

  render() {
    const posts = Object.values(FakePosts);
    return (
      <div>
        <div className="post-list">
          <h2> This is post list </h2>
          {posts.map((post) => (
            <SinglePost post={post} key={post.id} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null,
  // username: state.auth.currentUser.name
});

// export default connect(mapStateToProps)(LandingView);
export default connect(mapStateToProps)(CategoryList);