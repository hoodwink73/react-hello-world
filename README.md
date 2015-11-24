Comment Box
============

This example puts the Comments Box [tutorial](https://facebook.github.io/react/docs/tutorial.html) on React's official website into this boilerplate.

The code changes a little with this new setting which promotes use of ES6.

We are using React 0.13 which promotes idiomatic JS and hence extends `Components` and creates new classes which are native to ES6 in lieu of `React.createClass`.

I also dive in ES6 modules in this commit.

Here we create a higher order Components

`CommentBox`

which includes

-  `CommentList`
    - `Comment`
-  `CommentForm`

We have created used an express server along with Weppack server to respond to APIS.

The data is stored in `comments.json`.

Adding a comment from the app will add a comment in the json.

And deleting a comment from the file will remove the comment from the app.

react-hot-boilerplate
=====================

The minimal dev environment to enable live-editing React components.

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Missing Features

This boilerplate is purposefully simple to show the minimal configuration for React Hot Loader. For a real project, you'll want to add a separate config for production with hot reloading disabled and minification enabled. You'll also want to add a router, styles and maybe combine dev server with an existing server. This is out of scope of this boilerplate, but you may want to look into [other starter kits](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#starter-kits).

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC
