var path = require('path');
var express = require('express');
var auth = require('basic-auth');
var webpack = require('webpack');
var config = require('../webpack.config.js');

var env = process.env.NODE_ENV || process.argv[2]  || 'development';
var port = process.env.PORT || 5000;
var url = 'http://localhost:'+ port;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve('public')));


var apiRoutes = require('./api/routes');

app.use('/api', apiRoutes);

app.get('/*', function(req, res) {
	res.render(path.join(__dirname, '..', 'public', 'index.ejs'),{
		env: env || 'development'
	});
});

app.listen(port, function() {
	console.log('Express running on port '+ port);
});