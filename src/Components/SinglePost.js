import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SinglePost extends Component {
  render() {
    let { post } = this.props;
    return (
      <div className="single-post">
        <div className="single-post-detail">
          <Link to={`/${post.category}/${post.id}`}>
            <div className="post-title"><h3>{ post.title }</h3></div>
          </Link>
          <div className="post-body">{ post.body }</div>
          <div className="post-author">Author: { post.author }</div>
          <div className="post-category">Category: { post.category }</div>
        </div>
      </div>
    );
  }
}

export default SinglePost;