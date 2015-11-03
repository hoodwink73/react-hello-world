import React, {Component} from 'react';
import marked from 'marked';

export default class Comment extends Component {
  // a weird way to get past
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {
      sanitize: true
    });

    return {
      __html: rawMarkup
    }
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          {/* wow!! lets gawk at this API */}
          <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
      </div>
    );
  }
}
