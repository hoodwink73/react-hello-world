import React, { Component } from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

var ParseComponent = ParseReact.Component(React);

export default class CommentBox extends ParseComponent {
  constructor() {
    super();
  }

  observe(props, state) {
    return {
      comments: (new Parse.Query('Comments')).ascending('createdAt')
    }
  }

  addNewComment(comment) {
    ParseReact.Mutation.Create('Comments', comment).dispatch();
  }

  refreshComments() {
    setInterval(function () {
      this.refreshQueries('comments');
      console.log('Hello');
    }.bind(this), this.props.pollInterval);
  }

  componentDidMount() {
    this.refreshComments.call(this);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.data.comments}/>
        <CommentForm onCommentSubmit={this.addNewComment}/>
      </div>
    );
  }
}
