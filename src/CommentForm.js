import React, {Component} from 'react';

export default class CommenForm extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      text: ''
    };
  }
  handleAuthorChange(e) {
    console.log(this, e.target.value, this.state.author)
    this.setState({
      author: e.target.value
    })
  }
  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();

    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({
      author: author,
      text: text
    });

    this.setState({
      author: '',
      text: ''
    });
  }
  render() {
    return (
      <form className="commentForm" onSubmit={e => this.handleSubmit(e)}>
        <input type="text"
          placeholder="Your Name"
          value={this.state.author}
          onChange={e => this.handleAuthorChange(e)}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={e => this.handleTextChange(e)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
