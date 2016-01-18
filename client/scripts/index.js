require('isomorphic-fetch');
import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// var React = require('react'),
// 	Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>THROW THE CHALLENGE FLAG</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<span><Link to="/home" >{'Home '}</Link></span>
					|
				<span><Link to="/upload" >{' Upload'}</Link></span>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app container-fluid">
			  <div className='panel'>
				<PageNav />
				<Header />
			  </div>
			  {this.props.children}
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	Upload: require('../routes/Upload')
};

React.render((
	<Router history={createBrowserHistory()}>
		<Route path='/' component={App}>
			<IndexRoute component={routes.Home} />
			<Route path='home' component={routes.Home} />
			<Route path='upload' component={routes.Upload} />
		</Route>
	</Router>
	), document.body)



