require('isomorphic-fetch');
var React = require('react'),
	Router = require('react-router');

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
				<span><Router.Link to="home" >{'Home '}</Router.Link></span>
					|
				<span><Router.Link to="upload" >{' Upload'}</Router.Link></span>
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
				<Router.RouteHandler/>
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	Upload: require('../routes/Upload')
};

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={routes.Home}/>
		<Router.Route name="upload" path="/upload" handler={routes.Upload}/>
		<Router.DefaultRoute handler={routes.Home}/>
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
