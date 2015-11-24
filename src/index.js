import React from 'react';
import CommentBox from './CommentBox.js';
import './style.css'

React.render(<CommentBox url="/api/comments" pollInterval={2000} />, document.getElementById('root'));
