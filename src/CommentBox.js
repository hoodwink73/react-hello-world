import React, { Component } from 'react';
import * as $ from 'jquery';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';


export default class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (comments) {
        this.setState({comments: comments});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function (comments) {
        this.setState({
          comments: comments
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}
