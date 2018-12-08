import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import PostComment from './PostComment';

import FakePosts from '../Data/FakePosts';

class DetailedPost extends Component {

  render() {
      const post = Object.values(FakePosts)[0];
      console.log(post);
      if (!post) {
        return <div>404 not found</div>
      }
      return (
        <div className="detailed-post">
          <div className='post' key='post-id'>
            <div className="single-post">
              <div className="single-post-detail">
                <Link to={`/${post.category}/${post.id}`}>
                  <div className="post-title"><h3>{ post.title }</h3></div>
                </Link>
                <div className="post-body">{ post.body }</div>
                <div className="post-author">Author: { post.author }</div>
                <div className="post-category">{ post.category }</div>
              </div>
              <div className="single-post-bottom">
                <div className="comments-summary">
                  <span>{ post.commentCount } <strong>Comments</strong></span>
                  <span>{ post.voteScore } <strong>Votes</strong></span>
                </div>
              </div>
              <textarea>comment</textarea>
              <button type="submit">comment</button>
            </div>
          </div>
        </div>
      )
  }
}


export default DetailedPost;