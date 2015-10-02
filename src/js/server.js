var path = require('path');
var express = require('express');
var auth = require('basic-auth');
var webpack = require('webpack');
var config = require('../../webpack.config');

var env = process.env.NODE_ENV || process.argv[2]  || 'development';
var port = process.env.PORT || 5000;
var url = 'http://localhost:'+ port;

var mongoose = require('mongoose');
mongoose.connect('mongodb://ts:foobar@ds055762.mongolab.com:55762/thunderstrike');

let app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve('public')));
app.use(function(req, res, next) {
	if(env !== 'production'){
		next();

		return;
	}

	var credentials = auth(req);

	if (!credentials || credentials.name !== 'foo' || credentials.pass !== 'bar') {
		res.writeHead(401, {
			'WWW-Authenticate': 'Basic realm="example"'
		});

		res.end()
	} else {
		next();
	}
});
app.use('/api', require('./api'));

app.get('/*', (req, res) => {
	res.render(path.join(__dirname, '..', '..', 'public', 'index.ejs'),{
		env: env || 'development'
	});
});

app.listen(port);

console.log('Express running on port '+ port);

