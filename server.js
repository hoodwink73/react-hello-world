var fs = require('fs');
var path = require('path');
var url = require('url');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var express = require('express');
var proxy = require('proxy-middleware');

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

// we will be using two servers
// one webpack dev server to server static files with hot reload support
// the other will be an express server that server apis and index.html

var webpackDev = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

var app = express();

// when static resources are asked we need to proxy to webpack dev
// server. It still retains hot reloading.
//
app.use('/static', proxy(url.parse('http://localhost:3001/static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/app', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Express server at localhost:3000');
  console.log('App opens at localhost:3000/app')
});

webpackDev.listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Webpack server at localhost:3001');
});
