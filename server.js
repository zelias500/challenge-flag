var express = require('express');
var babelify = require('babelify');
var browserify = require('browserify-middleware');
var less = require('less-middleware');
var nunjucks = require('nunjucks');
var config = require('./client/config');
import devConfig from './dev-config';

// spin up the database
const mongoose = require('mongoose');
const db = mongoose.connect(devConfig.dbURI).connection;
const startDbPromise = new Promise(function (resolve, reject) {
    db.on('open', resolve);
    db.on('error', reject);
});

startDbPromise.then(function () {
    console.log('MongoDB connection opened!');
});

// initialise express
var app = express();

// use nunjucks to process view templates in express
nunjucks.configure('server/templates/views', {
    express: app
});

// less will automatically compile matching requests for .css files
app.use(less('public'));
// public assets are served before any dynamic requests
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// common packages are precompiled on server start and cached
app.get('/js/' + config.common.bundle, browserify(config.common.packages, {
	cache: true,
	precompile: true
}));

// any file in /client/scripts will automatically be browserified,
// excluding common packages.
app.use('/js', browserify('./client/scripts', {
	external: config.common.packages,
	transform: [babelify.configure({
		plugins: ['object-assign']
	})]
}));

// API routing
app.use('/api/', require('./server/api'));

/*
	set up any additional server routes (api endpoints, static pages, etc.)
	here before the catch-all route for index.html below.
*/

app.get('*', function(req, res) {
	// this route will respond to all requests with the contents of your index
	// template. Doing this allows react-router to render the view in the app.
    res.render('index.html');
});

// start the server
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('\nServer ready on port %d\n', server.address().port);
});
