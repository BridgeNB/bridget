import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostComment extends Component {
  render() {
    const { voteComment } = this.props;
    return (
      <div>
        {this.props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div>
              <div className='comment-body'>{comment.body}</div>
              <div className="comment-author">by <b>{comment.author}</b></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}


export default PostComment;