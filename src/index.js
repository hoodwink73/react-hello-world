import React from 'react';
import comments from './data.js';
import CommentBox from './CommentBox.js';

React.render(<CommentBox comments={comments} />, document.getElementById('root'));
