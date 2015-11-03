import React, { Component } from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.props.comments} />
        <CommentForm />
      </div>
    );
  }
}
