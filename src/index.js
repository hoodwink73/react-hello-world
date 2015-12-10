import React from 'react';
import CommentBox from './CommentBox.js';
import Parse from 'parse';
import ParseKeys from './parse.js'
import './style.css'

Parse.initialize(ParseKeys.APPLICATION_ID, ParseKeys.JAVASCRIPT_KEY);

React.render(<CommentBox pollInterval={10000000} />, document.getElementById('root'));
